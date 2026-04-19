import { Component, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class NavComponent {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  isMenuOpen = signal(false);
  isDarkMode = signal(this.getStoredTheme());

  constructor() {
    if (this.isBrowser) {
      // Apply theme on init
      this.applyTheme(this.isDarkMode());

      effect(() => {
        const isDark = this.isDarkMode();
        this.applyTheme(isDark);
      });
    }
  }

  private applyTheme(isDark: boolean) {
    document.documentElement.dataset['theme'] = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private getStoredTheme(): boolean {
    if (this.isBrowser) {
      const stored = localStorage.getItem('theme');
      return stored !== 'light';
    }
    return true;
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isBrowser) {
      document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
