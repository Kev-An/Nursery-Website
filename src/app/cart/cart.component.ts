import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';

export interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Mock data matching the screenshot
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      variant: '10" POT',
      price: 58,
      quantity: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  constructor(public cartService: CartService) {}
  shippingCost = 9.95;
  freeShippingThreshold = 75;

  incrementQty(item: CartItem) {
    item.quantity++;
  }

  decrementQty(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
  }

  getSubtotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }

  getTotal(): number {
    const sub = this.getSubtotal();
    return sub > 0 ? sub + this.shippingCost : 0;
  }

  getAmountToFreeShipping(): number {
    const sub = this.getSubtotal();
    const remaining = this.freeShippingThreshold - sub;
    return remaining > 0 ? remaining : 0;
  }
}
