import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  href: string;
}

interface HeroStat {
  index: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  brandName = 'Plants & Co.';

  navLinks: NavLink[] = [
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Care', href: '#care' },
    { label: 'Journal', href: '#journal' }
  ];

  eyebrow = 'EST. 2009 — PUNE, INDIA';

  headlineLines = [
    { text: 'Where Plants', style: 'solid' },
    { text: 'Find Their', style: 'accent' },
    { text: 'People', style: 'solid' }
  ];

  description =
    'A curated nursery and botanical studio in the heart of Portland. Rare tropicals, native specimens, and the knowledge to help them thrive.';

  primaryCta = 'SHOP COLLECTION';
  secondaryCta = 'ABOUT US';

  heroImageUrl =
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=80';

  stats: HeroStat[] = [
    { index: '01', label: '600+ species in stock' },
    { index: '02', label: 'Certified growers on-site' },
    { index: '03', label: 'Plant adoption guarantee' }
  ];

  onPrimaryCta(): void {
    console.log('Browse collection clicked');
  }

  onSecondaryCta(): void {
    console.log('Our story clicked');
  }
}