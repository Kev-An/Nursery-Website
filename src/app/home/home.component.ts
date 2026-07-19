import { Component, OnInit } from '@angular/core';
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
interface ProductReview {
  productName: string;
  date: string;
  rating: number;
  userName: string;
  location?: string;
  verified: boolean;
  title: string;
  quote: string;
  likes: number;
  dislikes: number;
  imageUrl?: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName: string | null = null;
  userRole: string | null = null;

  brandName = 'Plants & Co.';
  navLinks: NavLink[] = [
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Care', href: '/care' },
  ];

  productReviews: ProductReview[] = [
    {
      productName: 'Gomphrena Mixed Color - Desi Flower Seeds',
      date: '07/15/2026',
      rating: 1,
      userName: 'Vidyasagar Saundankar',
      location: 'Nagpur, Maharashtra, India',
      verified: true,
      title: 'Seeds not germinated',
      quote: 'Even after 10 days of sowing seeds not germinated.',
      likes: 0,
      dislikes: 0,
    },
    {
      productName: 'monstera-deliciosa - Plant',
      date: '07/14/2026',
      rating: 5,
      userName: 'Dibyendu Sahoo',
      verified: false,
      title: 'Really pleased',
      quote:
        'Beautiful healthy plant, well rooted and no damage at all in transit. Kept it in indirect light and it is thriving. Packing was done very carefully to ensure the plant stayed secure during shipping.',
      likes: 1,
      dislikes: 1,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1669148911895-a95de51d09ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9uc3RlcmElMjBkZWxpY2lvc2F8ZW58MHx8MHx8fDA%3D',
    },
    {
      productName: 'Mandevilla (Any Color) - Plant',
      date: '07/14/2026',
      rating: 5,
      userName: 'Roopam Shahi',
      verified: false,
      title: 'Better than expected',
      quote:
        'Received a bigger plant than I expected for this price. Not a single leaf was broken. It has settled into my balcony very nicely and is already showing signs of new blooms.',
      likes: 0,
      dislikes: 0,
    },
    {
      productName: 'Wonderful Orchid plants - Pack of 2',
      date: '07/14/2026',
      rating: 5,
      userName: 'Kunal Kunal',
      verified: false,
      title: 'Exactly what I wanted',
      quote:
        'The plant reached me healthy and green, nicely packed with the soil intact. It has already put out two new leaves since I repotted it. Highly recommend this seller!',
      likes: 0,
      dislikes: 0,
      imageUrl:
        'https://media.istockphoto.com/id/648724788/photo/orchids-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=DEGb1n6NwvWx-shZd_O48Ukl52Kz_aeuvdG0CngPZ6U=',
    },
    {
      productName: '4.9 inch (12 cm) Matka Vase Marble Finish Round...',
      date: '07/14/2026',
      rating: 5,
      userName: 'swapnaja sharma',
      verified: false,
      title: 'Delivered on time and in good shape',
      quote:
        'Sturdy pot with a good finish and proper drainage holes. It came without a single chip thanks to the careful packing. It looks absolutely perfect on my living room side table.',
      likes: 0,
      dislikes: 0,
    },
    {
      productName: 'Elephant bush, Portulacaria afra variegata, Jade plant...',
      date: '07/14/2026',
      rating: 4,
      userName: 'Payel Saha',
      verified: false,
      title: 'Good value for money',
      quote:
        'Plant arrived in decent condition and is growing well now. Slightly smaller than I imagined from the photo, but the overall health and vibrant color of the leaves totally makes up for it.',
      likes: 0,
      dislikes: 0,
    },
    {
      productName: 'Monstera Deliciosa - Large Plant',
      date: '07/18/2026',
      rating: 5,
      userName: 'Anjali T.',
      location: 'Mumbai, Maharashtra, India',
      verified: true,
      title: 'Thriving and gorgeous!',
      quote:
        'Arrived in fantastic condition. The packaging was incredibly secure, and the fenestrations on the leaves are huge and healthy. I will definitely be ordering from this nursery again!',
      likes: 4,
      dislikes: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1545165375-1b744b9ed444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnN0ZXJhJTIwZGVsaWNpb3NhfGVufDB8fDB8fHww',
    },
    {
      productName: 'Fiddle Leaf Fig (Bambino) - Plant',
      date: '07/17/2026',
      rating: 3,
      userName: 'Rajeev K.',
      verified: false,
      title: 'A bit droopy on arrival',
      quote:
        'The plant itself is a good size, but it was quite dehydrated when it arrived. A few leaves have dropped, but I am hoping it recovers with some TLC, watering, and proper indirect sunlight over the next few weeks.',
      likes: 1,
      dislikes: 0,
    },
  ];
  eyebrow = 'EST. 2009 — PUNE, INDIA';
  headlineLines = [
    { text: 'Where Plants', style: 'solid' },
    { text: 'Find Their', style: 'accent' },
    { text: 'People', style: 'solid' },
  ];
  description =
    'A curated nursery and botanical studio in the heart of Portland.';
  primaryCta = 'SHOP COLLECTION';
  secondaryCta = 'ABOUT US';
  heroImageUrl =
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=80';
  stats: HeroStat[] = [
    { index: '01', label: '600+ species in stock' },
    { index: '02', label: 'Certified growers on-site' },
    { index: '03', label: 'Plant adoption guarantee' },
  ];

  ngOnInit(): void {
    this.userName = localStorage.getItem('user-name');
    this.userRole = localStorage.getItem('role');
  }

  onPrimaryCta(): void {
    console.log('Browse clicked');
  }
  onSecondaryCta(): void {
    console.log('Story clicked');
  }

  getBarWidth(index: number): string {
    const percentages = ['70%', '55%', '40%', '10%', '5%'];
    return percentages[index];
  }

  getReviewCount(index: number): string {
    const counts = ['281739', '221618', '184329', '2702', '4411'];
    return counts[index];
  }
}
