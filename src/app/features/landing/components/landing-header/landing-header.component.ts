import { Component, signal } from '@angular/core';
import { NAV_ITEMS, SITE_LOGO } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  templateUrl: './landing-header.component.html',
})
export class LandingHeaderComponent {
  readonly logoLine = SITE_LOGO;
  readonly navItems = NAV_ITEMS;
  /** Wordmark: primeiro token + restante (ex.: Mary | Vivaldi Personal). */
  readonly brandFirst = SITE_LOGO.split(/\s+/)[0] ?? SITE_LOGO;
  readonly brandRest = SITE_LOGO.split(/\s+/).slice(1).join(' ').trim();
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
