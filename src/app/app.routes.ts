import { Routes } from '@angular/router';
import { FeaturedPlantsComponent } from './featured-plants/featured-plants.component';
import { HomeComponent } from './home/home.component';
import { CareComponent } from "./care/care.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'featured-plants', component: FeaturedPlantsComponent },,
  {path:'care',component:CareComponent},
  {path:'about',component:AboutComponent},
];
