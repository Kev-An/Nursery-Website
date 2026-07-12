import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Imported for navigation
import { CartService } from '../cart/cart.service';

export interface PlantItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule], // Added RouterModule here
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  // Change this array to empty [] to test the centered empty state layout
  // Inject the cart service in the constructor
  constructor(public cartService: CartService) {}
  wishlistItems: PlantItem[] = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 34,
      imageUrl:
        'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 58,
      imageUrl:
        'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  moveToCart(item: PlantItem) {
    this.wishlistItems = this.wishlistItems.filter((i) => i.id !== item.id);
    this.cartService.addToCart(item);

    this.wishlistItems = this.wishlistItems.filter((i) => i.id !== item.id);
  }

  removeFromWishlist(item: PlantItem) {
    this.wishlistItems = this.wishlistItems.filter((i) => i.id !== item.id);
  }
}
