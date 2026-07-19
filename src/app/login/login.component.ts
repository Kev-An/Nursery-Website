import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Properties
  brandName = 'Plants & Co.';
  eyebrow = 'WELCOME BACK';
  headline = 'Sign in to your garden';
  subtext =
    'Track orders, save favourites, and pick up your care reminders right where you left off.';
  visualQuote = 'Every plant deserves a good home.';
  visualEyebrow = 'EST. 2009 — PUNE, INDIA';
  visualImageUrl =
    'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop';

  // State variables (Must be public to be used in HTML)
  public showPassword = false;
  public isLoading = false;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });
  }

  // Helper for HTML
  get f() {
    return this.form.controls;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  continueAsGuest(): void {
    localStorage.setItem('user-name', 'Guest');
    localStorage.setItem('role', 'GUEST');

    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    // API Call
    this.http
      .post('http://localhost:5555/api/users/login', this.form.value)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          localStorage.setItem('user-name', response.fullName);
          localStorage.setItem('role', response.userRole);
          console.log(
            'user name-------------------',
            localStorage.getItem('user-name'),
            'role-------------------------',
            localStorage.getItem('role'),
          );

          alert('Login successful!');
          this.isLoading = false;

          const role = response.userRole;

          if (role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (error: any) => {
          console.error('Login failed', error);
          alert('Invalid email or password.');
          this.isLoading = false;
        },
      });
  }
}
