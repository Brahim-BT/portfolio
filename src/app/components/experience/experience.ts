import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise web applications using Angular and Spring Boot. Implemented microservices architecture and CI/CD pipelines.',
      highlights: ['Reduced load time by 40%', 'Led team of 4 developers', 'AWS deployment']
    },
    {
      title: 'Software Developer',
      company: 'Digital Innovations',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client-facing applications. Specialized in Angular frontend development with REST API integration.',
      highlights: ['Shipped 10+ features', '99.9% uptime', 'Mentored 2 interns']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2020 - 2021',
      description: 'Contributed to building MVP applications for various startup clients. Gained strong foundation in TypeScript and Java.',
      highlights: ['First job in tech', 'Learned full stack', 'Agile experience']
    }
  ];

  education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2020',
      focus: 'Software Engineering'
    }
  ];
}
