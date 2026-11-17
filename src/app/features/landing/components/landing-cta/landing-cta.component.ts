import { Component } from '@angular/core';
import {
  CTA,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-cta',
  standalone: true,
  templateUrl: './landing-cta.component.html',
})
export class LandingCtaComponent {
  readonly copy = CTA;
  readonly whatsappHref = WHATSAPP_URL;
  readonly whatsappDisplay = WHATSAPP_DISPLAY;
  readonly instagramHref = INSTAGRAM_URL;
}
