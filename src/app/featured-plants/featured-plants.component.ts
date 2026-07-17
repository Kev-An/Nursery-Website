import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Plant {
  id: number;
  name: string;
  latinName: string;
  price: number;
  potSize: string;
  light: string;
  water: string;
  badge: string;
  imageUrl: string;
  imagePosition?: string;
}

export interface CartItem {
  id: number;
  plantId: number;
  quantity: number;
  // extend with whatever fields your CartItem DTO actually returns
}

@Component({
  selector: 'app-featured-plants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './featured-plants.component.html',
  styleUrls: ['./featured-plants.component.css'],
})
export class FeaturedPlantsComponent implements OnInit {
  plants: Plant[] = [];

  searchTerm = '';
  selectedType = 'All';

  currentPage = 1;
  itemsPerPage = 6;

  maxPrice = 0;

  // REST API
  baseUrl: string = 'http://localhost:5555';
  endpoint: string = '/api/plants';
  cartEndpoint: string = '/add';

  // add-to-cart state
  addingToCartId: number | null = null;
  cartError: string | null = null;

  plantTypes: string[] = [
    'All',
    'BESTSELLER',
    'STATEMENT',
    'LOW LIGHT',
    'EASY CARE',
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getPlants();
  }

  // GET plants from REST API
  getPlants(): void {
    this.http.get<Plant[]>(this.baseUrl + this.endpoint).subscribe({
      next: (data: Plant[]) => {
        this.plants = data;
        this.maxPrice = this.maximumPlantPrice;

        console.log('Plants loaded:', data);
      },
      error: (error) => {
        console.error('Error loading plants:', error);
      },
    });
  }

  get maximumPlantPrice(): number {
    if (this.plants.length === 0) {
      return 0;
    }

    return Math.max(...this.plants.map((plant) => plant.price));
  }

  get filteredPlants(): Plant[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(search) ||
        plant.latinName.toLowerCase().includes(search);

      const matchesType =
        this.selectedType === 'All' || plant.badge === this.selectedType;

      const matchesPrice = plant.price <= this.maxPrice;

      return matchesSearch && matchesType && matchesPrice;
    });
  }

  get totalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredPlants.length / this.itemsPerPage),
    );
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  get paginatedPlants(): Plant[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    return this.filteredPlants.slice(
      startIndex,
      startIndex + this.itemsPerPage,
    );
  }

  applyFilters(): void {
    this.currentPage = 1;
  }

  clearPriceFilter(): void {
    this.maxPrice = this.maximumPlantPrice;
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  addToCart(plant: Plant): void {
    this.cartError = null;
    this.addingToCartId = plant.id;

    this.http
      .post<CartItem>(`http://localhost:5555/cart/add/${plant.id}`, {})
      .subscribe({
        next: (cartItem) => {
          console.log('Added to cart:', cartItem);
          this.addingToCartId = null;
        },
        error: (error) => {
          console.error('Error adding to cart:', error);
          this.cartError = `Couldn't add ${plant.name} to your cart. Please try again.`;
          this.addingToCartId = null;
        },
      });
  }
}
