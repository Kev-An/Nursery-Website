import { Routes } from '@angular/router';
import { FeaturedPlantsComponent } from './featured-plants/featured-plants.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'featured-plants', component: FeaturedPlantsComponent },
  { path: 'cart', component: CartComponent },
];
