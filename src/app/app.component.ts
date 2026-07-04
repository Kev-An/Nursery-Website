import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FeaturedPlantsComponent } from './featured-plants/featured-plants.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FeaturedPlantsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proj-nursery';
}
