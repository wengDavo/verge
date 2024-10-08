import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/component/section-title/section-title.component';
import { AbsractDesignSparklesComponent } from '../../../shared/component/absract-design-sparkles/absract-design-sparkles.component';
import { ValuesComponent } from '../values/values.component';

@Component({
  selector: 'app-values-container',
  standalone: true,
  imports: [
    SectionTitleComponent,
    AbsractDesignSparklesComponent,
    ValuesComponent,
  ],
  template: `
    <section class="grid gap-8 md:grid-cols-2 md:gap-16">
      <article class="md:grid md:place-content-center">
        <app-section-title [title]="title" [description]="description" />
      </article>
      <app-values />
    </section>
  `,
  styles: ``,
})
export class ValuesContainerComponent {
  title: string = 'Our values';
  description: string =
    'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.';
}
