import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Plant {
  name: string;
  latinName: string;
  price: number;
  potSize: string;
  light: string;
  water: string;
  badge: string;
  imageUrl: string;
  imagePosition?: string; // optional CSS object-position override
}

@Component({
  selector: 'app-featured-plants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-plants.component.html',
  styleUrls: ['./featured-plants.component.css']
})
export class FeaturedPlantsComponent {

  plants: Plant[] = [
    {
      name: 'Monstera Deliciosa',
      latinName: 'Monstera deliciosa',
      price: 34,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Fiddle Leaf Fig',
      latinName: 'Ficus lyrata',
      price: 58,
      potSize: '10" pot',
      light: 'Bright indirect',
      water: 'Water biweekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1598764557991-b9f211b73b81?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Terracotta Pot Set',
      latinName: 'Ceramic — 4" / 6" / 8"',
      price: 22,
      potSize: 'Set of 3',
      light: 'N/A',
      water: 'N/A',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Golden Barrel Cactus',
      latinName: 'Echinocactus grusonii',
      price: 26,
      potSize: '4" pot',
      light: 'Full sun',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnRzfGVufDB8fDB8fHww'
    }
  ];

  addToCart(plant: Plant): void {
    // Replace with real cart service call
    console.log('Added to cart:', plant.name);
  }
}
