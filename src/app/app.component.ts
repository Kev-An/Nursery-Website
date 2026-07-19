import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'proj-nursery';

  userName = 'Guest';
  role = 'GUEST';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUser();

    // Refresh navbar whenever navigation occurs
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadUser();
      });
  }

  loadUser(): void {
    this.userName = localStorage.getItem('user-name') || 'Guest';
    this.role = localStorage.getItem('role') || 'GUEST';
  }

  logout(): void {
    localStorage.removeItem('user-name');
    localStorage.removeItem('role');

    this.loadUser();

    this.router.navigate(['/login']);
  }
}
