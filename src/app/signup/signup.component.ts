import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

function passwordsMatchValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return null;
    }
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  brandName = 'Plants & Co.';

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Care', href: '#care' },
    { label: 'About', href: '#about' }
  ];

  eyebrow = 'NEW HERE?';
  headline = 'Create your account';
  subtext = 'Join a growing community of plant people. Get care reminders, early access to rare drops, and order tracking in one place.';

  visualQuote = 'Rare tropicals, native specimens, and the knowledge to help them thrive.';
  visualEyebrow = 'EST. 2009 — PUNE, INDIA';
  visualImageUrl =
    'https://plus.unsplash.com/premium_photo-1680630201319-a028d6b84cf3?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  showPassword = false;
  showConfirmPassword = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        agreeToTerms: [false, [Validators.requiredTrue]]
      },
      { validators: passwordsMatchValidator() }
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  get f() {
    return this.form.controls;
  }

  get passwordsMismatch(): boolean {
    return (
      this.form.hasError('passwordMismatch') &&
      !!this.f['confirmPassword'].touched
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Replace with a real auth service call
    console.log('Signup submitted:', this.form.value);
  }
}
