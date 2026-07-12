import { Injectable } from '@angular/core';

// This is our shared item format
export interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root', // This makes the data persist across the whole app
})
export class CartService {
  // Start with an empty cart
  items: CartItem[] = [];

  shippingCost = 9.95;
  freeShippingThreshold = 75;

  addToCart(plant: any) {
    // Check if item is already in cart to just increase quantity
    const existingItem = this.items.find((i) => i.id === plant.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // If it's new, format it as a CartItem and add it
      this.items.push({
        id: plant.id,
        name: plant.name,
        variant: 'Standard Pot', // Default text since wishlist doesn't specify pot size
        price: plant.price,
        quantity: 1,
        imageUrl: plant.imageUrl,
      });
    }
  }

  removeFromCart(item: CartItem) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQty(item: CartItem) {
    item.quantity++;
  }

  decrementQty(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getSubtotal(): number {
    return this.items.reduce(
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
