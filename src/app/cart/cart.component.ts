import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  isCartEmpty:boolean = true;
}
