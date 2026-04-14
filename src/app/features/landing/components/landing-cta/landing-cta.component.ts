import { Component } from '@angular/core';
import {
  CTA,
  INSTAGRAM_URL,
  WHATSAPP_E164,
  WHATSAPP_MESSAGE,
} from '../../../../core/data/landing-content';
import { buildWhatsAppLink } from '../../../../core/utils/whatsapp.util';

@Component({
  selector: 'app-landing-cta',
  standalone: true,
  templateUrl: './landing-cta.component.html',
})
export class LandingCtaComponent {
  readonly copy = CTA;
  readonly whatsappHref = buildWhatsAppLink(WHATSAPP_E164, WHATSAPP_MESSAGE);
  readonly instagramHref = INSTAGRAM_URL;
}
