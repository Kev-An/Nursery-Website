import { Routes } from '@angular/router';
import { FeaturedPlantsComponent } from './featured-plants/featured-plants.component';
import { HomeComponent } from './home/home.component';
import { CareComponent } from './care/care.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'featured-plants', component: FeaturedPlantsComponent },
  { path: 'care', component: CareComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
];
