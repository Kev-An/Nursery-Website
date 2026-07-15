import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  brandName = 'Plants & Co.';

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Care', href: '#care' },
    { label: 'About', href: '#about' }
  ];

  eyebrow = 'WELCOME BACK';
  headline = 'Sign in to your garden';
  subtext = 'Track orders, save favourites, and pick up your care reminders right where you left off.';

  visualQuote = 'Every plant deserves a good home.';
  visualEyebrow = 'EST. 2009 — PUNE, INDIA';
  visualImageUrl =
    'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  showPassword = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Replace with a real auth service call
    console.log('Login submitted:', this.form.value);
  }
}
