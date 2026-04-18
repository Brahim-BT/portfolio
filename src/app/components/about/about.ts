import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IconComponent } from '../icon/icon';

import angularIcon from '@thesvg/icons/angular';
import dockerIcon from '@thesvg/icons/docker';
import javaIcon from '@thesvg/icons/java';
import javascriptIcon from '@thesvg/icons/javascript';
import mysqlIcon from '@thesvg/icons/mysql';
import postgresqlIcon from '@thesvg/icons/postgresql';
import reactIcon from '@thesvg/icons/react';
import bootstrapIcon from '@thesvg/icons/bootstrap';
import springBootIcon from '@thesvg/icons/spring-boot';
import typescriptIcon from '@thesvg/icons/typescript';
import flutterIcon from '@thesvg/icons/flutter';
import tailwindcssIcon from '@thesvg/icons/tailwind-css';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
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

favoriteTools = [
    // Frontend
    { name: 'Angular', slug: 'angular', icon: angularIcon },
    { name: 'React', slug: 'react', icon: reactIcon },
    { name: 'TypeScript', slug: 'typescript', icon: typescriptIcon },
    { name: 'JavaScript', slug: 'javascript', icon: javascriptIcon },
    { name: 'Flutter', slug: 'flutter', icon: flutterIcon },
    { name: 'Tailwind CSS', slug: 'tailwind-css', icon: tailwindcssIcon },
    { name: 'Bootstrap', slug: 'bootstrap', icon: bootstrapIcon },
    // Backend
    { name: 'Java', slug: 'java', icon: javaIcon },
    { name: 'Spring Boot', slug: 'spring-boot', icon: springBootIcon },
    // Database
    { name: 'PostgreSQL', slug: 'postgresql', icon: postgresqlIcon },
    { name: 'MySQL', slug: 'mysql', icon: mysqlIcon },
    // DevOps
    { name: 'Docker', slug: 'docker', icon: dockerIcon },
  ];
}
