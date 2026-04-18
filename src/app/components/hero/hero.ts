import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  profileImage = 'assets/profile-photo.png';

  techBadges = [
    'Angular',
    'TypeScript',
    'Spring Boot',
    'Java',
    'RxJS',
    'PostgreSQL',
    'REST APIs',
    'Docker',
  ];
}
