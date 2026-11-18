import { Component } from '@angular/core';
import { AssistantComponent } from '../assistant/assistant.component';
import { LandingAboutComponent } from './components/landing-about/landing-about.component';
import { LandingCtaComponent } from './components/landing-cta/landing-cta.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingHeroComponent } from './components/landing-hero/landing-hero.component';
import { LandingServicesComponent } from './components/landing-services/landing-services.component';
import { LandingTestimonialsComponent } from './components/landing-testimonials/landing-testimonials.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingServicesComponent,
    LandingAboutComponent,
    LandingTestimonialsComponent,
    LandingCtaComponent,
    LandingFooterComponent,
    AssistantComponent,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
