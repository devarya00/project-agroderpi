import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../app/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Add them here!
  templateUrl: './login.html',
  
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    const { data, error } = await this.authService.signIn(email, password);

    if (error) {
      this.errorMessage = error.message;
    } else {
      console.log('Login successful! JWT Token:', data.session?.access_token);
      alert('Login Successful! Check console for token.');
      // Next step: Redirect the user to the dashboard
    }
    
    this.isLoading = false;
  }
}