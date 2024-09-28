import express from "express";
import morgan from "morgan";
import path from "path";

// middleware
import setCorsHeader from "./middleware/cors.js";

// routes
import propertyRoutes from "./app/property/routes.js";
import testimonialsRouter from "./app/testimonials/routes.js";
import faqsRouter from "./app/faqs/routes.js";

const app = express();
const port = 3000;

console.log(path.join(process.cwd(), "public"));

// general middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(setCorsHeader);
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => res.json("active"));
app.use("/property", propertyRoutes);
app.use("/testimonials", testimonialsRouter);
app.use("/faqs", faqsRouter);
app.get("*", (req, res) => res.send("Error 404 endpoint"));

// listen
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});