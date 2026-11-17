import { Component, signal } from '@angular/core';
import { RESULTS, TESTIMONIALS_INTRO } from '../../../../core/data/landing-content';

@Component({
  selector: 'app-landing-testimonials',
  standalone: true,
  templateUrl: './landing-testimonials.component.html',
})
export class LandingTestimonialsComponent {
  readonly intro = TESTIMONIALS_INTRO;
  readonly results = RESULTS;
  readonly current = signal(0);

  private touchStartX: number | null = null;

  prev(): void {
    this.current.update((i) => (i - 1 + this.results.length) % this.results.length);
  }

  next(): void {
    this.current.update((i) => (i + 1) % this.results.length);
  }

  goTo(index: number): void {
    this.current.set(index);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? null;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.touchStartX === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? this.touchStartX) - this.touchStartX;
    this.touchStartX = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) this.next();
    else this.prev();
  }
}
