import { Component } from '@angular/core';
import { ABOUT } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-about',
  standalone: true,
  templateUrl: './landing-about.component.html',
})
export class LandingAboutComponent {
  readonly about = ABOUT;
}
