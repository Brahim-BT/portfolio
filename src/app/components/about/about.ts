import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '5+', label: 'Happy Clients' },
    { value: '10+', label: 'Technologies' }
  ];

  highlights = [
    'Passionate about clean code and scalable architecture',
    'Experience with full-cycle development from concept to deployment',
    'Strong background in responsive design and user experience',
    'Continuous learner staying updated with latest tech trends'
  ];
}
