import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Plant {
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

@Component({
  selector: 'app-featured-plants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './featured-plants.component.html',
  styleUrls: ['./featured-plants.component.css']
})
export class FeaturedPlantsComponent {

  searchTerm = '';
  selectedType = 'All';

  currentPage = 1;
  itemsPerPage = 6;

  plantTypes: string[] = [
    'All',
    'BESTSELLER',
    'STATEMENT',
    'LOW LIGHT',
    'EASY CARE'
  ];

  plants: Plant[] = [
    {
      name: 'Monstera Deliciosa',
      latinName: 'Monstera deliciosa',
      price: 799,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=987&auto=format&fit=crop'
    },
    {
      name: 'Fiddle Leaf Fig',
      latinName: 'Ficus lyrata',
      price: 1499,
      potSize: '10" pot',
      light: 'Bright indirect',
      water: 'Water biweekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1598764557991-b9f211b73b81?q=80&w=1035&auto=format&fit=crop'
    },
    {
      name: 'Terracotta Pot Set',
      latinName: 'Ceramic Collection',
      price: 599,
      potSize: 'Set of 3',
      light: 'N/A',
      water: 'N/A',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=987&auto=format&fit=crop'
    },
    {
      name: 'Golden Barrel Cactus',
      latinName: 'Echinocactus grusonii',
      price: 649,
      potSize: '4" pot',
      light: 'Full sun',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop'
    },
    {
      name: 'Snake Plant',
      latinName: 'Dracaena trifasciata',
      price: 699,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water biweekly',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=900&auto=format&fit=crop'
    },
    {
      name: 'ZZ Plant',
      latinName: 'Zamioculcas zamiifolia',
      price: 749,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water monthly',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Bird of Paradise',
      latinName: 'Strelitzia reginae',
      price: 1799,
      potSize: '10" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&auto=format&fit=crop'
    },
    {
      name: 'Rubber Plant',
      latinName: 'Ficus elastica',
      price: 899,
      potSize: '8" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=900&auto=format&fit=crop'
    },
    {
      name: 'Golden Pothos',
      latinName: 'Epipremnum aureum',
      price: 399,
      potSize: '4" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc8e8?w=900&auto=format&fit=crop'
    },
    {
      name: 'Peace Lily',
      latinName: 'Spathiphyllum wallisii',
      price: 699,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?w=900&auto=format&fit=crop'
    },
    {
      name: 'Chinese Money Plant',
      latinName: 'Pilea peperomioides',
      price: 549,
      potSize: '4" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Swiss Cheese Vine',
      latinName: 'Monstera adansonii',
      price: 749,
      potSize: '6" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1614594575810-771c75b1f2a2?w=900&auto=format&fit=crop'
    },
    {
      name: 'Calathea Orbifolia',
      latinName: 'Goeppertia orbifolia',
      price: 1099,
      potSize: '6" pot',
      light: 'Indirect light',
      water: 'Keep moist',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=900&auto=format&fit=crop'
    },
    {
      name: 'Prayer Plant',
      latinName: 'Maranta leuconeura',
      price: 649,
      potSize: '4" pot',
      light: 'Low light',
      water: 'Keep moist',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Boston Fern',
      latinName: 'Nephrolepis exaltata',
      price: 599,
      potSize: '6" pot',
      light: 'Indirect light',
      water: 'Keep moist',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop'
    },
    {
      name: 'String of Pearls',
      latinName: 'Curio rowleyanus',
      price: 499,
      potSize: '4" pot',
      light: 'Bright light',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=900&auto=format&fit=crop'
    },
    {
      name: 'Aloe Vera',
      latinName: 'Aloe barbadensis',
      price: 349,
      potSize: '4" pot',
      light: 'Bright light',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Jade Plant',
      latinName: 'Crassula ovata',
      price: 449,
      potSize: '4" pot',
      light: 'Bright light',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=900&auto=format&fit=crop'
    },
    {
      name: 'Ponytail Palm',
      latinName: 'Beaucarnea recurvata',
      price: 899,
      potSize: '6" pot',
      light: 'Bright light',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&auto=format&fit=crop'
    },
    {
      name: 'Areca Palm',
      latinName: 'Dypsis lutescens',
      price: 1299,
      potSize: '10" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop'
    },
    {
      name: 'Parlor Palm',
      latinName: 'Chamaedorea elegans',
      price: 749,
      potSize: '6" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&auto=format&fit=crop'
    },
    {
      name: 'Philodendron Brasil',
      latinName: 'Philodendron hederaceum',
      price: 549,
      potSize: '4" pot',
      light: 'Indirect light',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc8e8?w=900&auto=format&fit=crop'
    },
    {
      name: 'Heartleaf Philodendron',
      latinName: 'Philodendron hederaceum',
      price: 499,
      potSize: '4" pot',
      light: 'Low light',
      water: 'Water weekly',
      badge: 'LOW LIGHT',
      imageUrl: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc8e8?w=900&auto=format&fit=crop'
    },
    {
      name: 'Pink Princess',
      latinName: 'Philodendron erubescens',
      price: 2499,
      potSize: '6" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Alocasia Polly',
      latinName: 'Alocasia amazonica',
      price: 1099,
      potSize: '6" pot',
      light: 'Bright indirect',
      water: 'Keep moist',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=900&auto=format&fit=crop'
    },
    {
      name: 'Elephant Ear',
      latinName: 'Colocasia esculenta',
      price: 999,
      potSize: '8" pot',
      light: 'Bright light',
      water: 'Keep moist',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop'
    },
    {
      name: 'Croton Petra',
      latinName: 'Codiaeum variegatum',
      price: 649,
      potSize: '6" pot',
      light: 'Bright light',
      water: 'Water weekly',
      badge: 'BESTSELLER',
      imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop'
    },
    {
      name: 'Spider Plant',
      latinName: 'Chlorophytum comosum',
      price: 399,
      potSize: '4" pot',
      light: 'Indirect light',
      water: 'Water weekly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&auto=format&fit=crop'
    },
    {
      name: 'Echeveria',
      latinName: 'Echeveria elegans',
      price: 299,
      potSize: '3" pot',
      light: 'Full sun',
      water: 'Water monthly',
      badge: 'EASY CARE',
      imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=900&auto=format&fit=crop'
    },
    {
      name: 'Orchid',
      latinName: 'Phalaenopsis',
      price: 1199,
      potSize: '5" pot',
      light: 'Bright indirect',
      water: 'Water weekly',
      badge: 'STATEMENT',
      imageUrl: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=900&auto=format&fit=crop'
    }
  ];

  get maximumPlantPrice(): number {
    return Math.max(...this.plants.map((plant) => plant.price));
  }

  maxPrice = this.maximumPlantPrice;

  get filteredPlants(): Plant[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(search) ||
        plant.latinName.toLowerCase().includes(search);

      const matchesType =
        this.selectedType === 'All' ||
        plant.badge === this.selectedType;

      const matchesPrice =
        plant.price <= this.maxPrice;

      return matchesSearch && matchesType && matchesPrice;
    });
  }

  get totalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredPlants.length / this.itemsPerPage)
    );
  }

  get pages(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, index) => index + 1
    );
  }

  get paginatedPlants(): Plant[] {
    const startIndex =
      (this.currentPage - 1) * this.itemsPerPage;

    return this.filteredPlants.slice(
      startIndex,
      startIndex + this.itemsPerPage
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
    console.log('Added to cart:', plant.name);
  }
}