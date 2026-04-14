import { Component } from '@angular/core';
import { FOOTER, SITE_NAME, SOCIAL_LINKS } from '../../../../core/data/landing-content';
import type { SocialLink } from '../../../../core/models/landing.types';

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  templateUrl: './landing-footer.component.html',
})
export class LandingFooterComponent {
  readonly siteName = SITE_NAME;
  readonly footer = FOOTER;
  readonly social: readonly SocialLink[] = SOCIAL_LINKS;
  readonly year = new Date().getFullYear();
}
