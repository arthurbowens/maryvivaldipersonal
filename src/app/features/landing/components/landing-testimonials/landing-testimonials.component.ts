import { Component } from '@angular/core';
import { TESTIMONIALS_INTRO } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-testimonials',
  standalone: true,
  templateUrl: './landing-testimonials.component.html',
})
export class LandingTestimonialsComponent {
  readonly intro = TESTIMONIALS_INTRO;
}
