import { Component } from '@angular/core';
import { HERO, WHATSAPP_URL } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  templateUrl: './landing-hero.component.html',
})
export class LandingHeroComponent {
  readonly copy = HERO;
  readonly whatsappHref = WHATSAPP_URL;
}
