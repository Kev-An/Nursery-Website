import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  brandName = 'Verdant & Co.';

  navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Shop', href: '#shop', active: false },
    { label: 'About', href: '#about', active: false },
    { label: 'Contact', href: '#contact', active: false }
  ];

  storyImageUrl = 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  imageBadge = {
    value: '12+',
    labelLines: ['Years', 'Experience']
  };

  eyebrow = 'Our Story';

  headlineLines = [
    { text: 'Bringing Nature', style: '' },
    { text: 'Into Your Home', style: 'accent' }
  ];

  paragraphs = [
    'We believe every home deserves beautiful greenery.',
    'Our nursery offers carefully selected indoor and outdoor plants.'
  ];

  stats = [
    { value: '500+', label: 'Plant Varieties' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '15+', label: 'Years Experience' }
  ];
}