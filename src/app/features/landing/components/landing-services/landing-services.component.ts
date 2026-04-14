import { Component } from '@angular/core';
import { SERVICES, SERVICES_INTRO } from '../../../../core/data/landing-content';
import type { ServiceItem } from '../../../../core/models/landing.types';

@Component({
  selector: 'app-landing-services',
  standalone: true,
  templateUrl: './landing-services.component.html',
})
export class LandingServicesComponent {
  readonly intro = SERVICES_INTRO;
  readonly services: readonly ServiceItem[] = SERVICES;
}
