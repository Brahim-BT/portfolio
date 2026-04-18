import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with Angular frontend and Spring Boot backend. Includes user authentication, product management, shopping cart, and payment integration.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Stripe'],
      type: 'Full Stack',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task management application with drag-and-drop kanban boards, team workspaces, and productivity analytics.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      type: 'Web App',
      featured: true
    },
    {
      title: 'Health Dashboard',
      description: 'Healthcare analytics dashboard for tracking patient metrics, appointment scheduling, and medical records management.',
      tech: ['Angular', 'Java', 'Spring Boot', 'Chart.js'],
      type: 'Enterprise',
      featured: false
    },
    {
      title: 'Portfolio CMS',
      description: 'Custom content management system for managing portfolio content with media library, SEO tools, and multi-language support.',
      tech: ['Angular', 'REST API', 'PostgreSQL', 'AWS S3'],
      type: 'Web App',
      featured: false
    }
  ];
}
