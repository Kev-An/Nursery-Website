import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Plant {
  id: number;
  name: string;
  latinName: string;
  price: number;
  potSize: number;
  light: string;
  water: string;
  badge: string;
  imageUrl?: string; // Remove this if your Plant entity doesn't have it
}

export interface CartItem {
  id: number;
  quantity: number;
  plant: Plant;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  baseUrl = 'http://localhost:5555';
  endpoint = '/cart';

  items: CartItem[] = [];

  shippingCost = 9.95;
  freeShippingThreshold = 75;

  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.loading = true;
    this.error = null;

    this.http.get<CartItem[]>(`${this.baseUrl}${this.endpoint}`).subscribe({
      next: (items) => {
        this.items = items;
        this.loading = false;

        console.log('Cart loaded:', items);
      },
      error: (err) => {
        console.error('Error loading cart:', err);
        this.error = 'Could not load your cart. Please try again.';
        this.loading = false;
      },
    });
  }

  incrementQty(item: CartItem): void {
    this.http
      .patch<CartItem>(
        `${this.baseUrl}${this.endpoint}/increment/${item.id}`,
        {},
      )
      .subscribe({
        next: (updatedItem) => {
          item.quantity = updatedItem.quantity;
        },
        error: (err) => {
          console.error('Error incrementing quantity:', err);
        },
      });
  }

  decrementQty(item: CartItem): void {
    this.http
      .patch(
        `${this.baseUrl}${this.endpoint}/decrement/${item.id}`,
        {},
        { responseType: 'text' },
      )
      .subscribe({
        next: () => {
          this.loadCart(); // Reload in case the item was deleted
        },
        error: (err) => {
          console.error('Error decrementing quantity:', err);
        },
      });
  }

  removeFromCart(item: CartItem): void {
    this.http
      .delete(`${this.baseUrl}${this.endpoint}/${item.id}`, {
        responseType: 'text',
      })
      .subscribe({
        next: () => {
          this.items = this.items.filter((i) => i.id !== item.id);
        },
        error: (err) => {
          console.error('Error removing item:', err);
        },
      });
  }

  getSubtotal(): number {
    return this.items.reduce(
      (total, item) => total + item.plant.price * item.quantity,
      0,
    );
  }

  getTotal(): number {
    const subtotal = this.getSubtotal();
    return subtotal > 0 ? subtotal + this.shippingCost : 0;
  }

  getAmountToFreeShipping(): number {
    const remaining = this.freeShippingThreshold - this.getSubtotal();
    return remaining > 0 ? remaining : 0;
  }
}
