import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface IconData {
  svg: string;
  title: string;
  hex: string;
}

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (icon?.svg) {
      <div class="icon-wrapper" [style.width.px]="size" [style.height.px]="size" [innerHTML]="safeSvg"></div>
    } @else {
      <div class="icon-wrapper icon-fallback" [style.width.px]="size" [style.height.px]="size">
        <span>{{ fallbackText }}</span>
      </div>
    }
  `,
  styles: [`
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast);
    }
    .icon-fallback {
      background: var(--color-surface-container-low);
      border-radius: 50%;
      font-size: 0.75rem;
      font-weight: 600;
    }
    :host ::ng-deep svg {
      width: 100%;
      height: 100%;
    }
  `]
})
export class IconComponent implements OnChanges {
  @Input() icon: IconData | null = null;
  @Input() size = 40;
  @Input() fallback = '';

  safeSvg: SafeHtml = '';
  fallbackText = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['icon'] && this.icon?.svg) {
      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.icon.svg);
    }
    if (changes['fallback'] && !this.icon?.svg) {
      this.fallbackText = this.fallback;
    }
  }
}