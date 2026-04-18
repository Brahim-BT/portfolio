import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Email', url: 'mailto:contact@example.com', icon: 'email' }
  ];

  async onSubmit() {
    this.isSubmitting.set(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
