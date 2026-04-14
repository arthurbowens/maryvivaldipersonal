import { Component } from '@angular/core';
import { HERO } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  templateUrl: './landing-hero.component.html',
})
export class LandingHeroComponent {
  readonly copy = HERO;
}
