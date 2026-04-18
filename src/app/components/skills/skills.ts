import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      icon: 'layout',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'RxJS', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Database & DevOps',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 85 }
      ]
    }
  ];
}
