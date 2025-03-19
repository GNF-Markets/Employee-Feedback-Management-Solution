import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Ensure this component is recognized as standalone
  imports: [
    CommonModule,  // Keep CommonModule instead of BrowserModule
    ReactiveFormsModule,
    
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snackbar: MatSnackBar,
              private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    console.log(this.loginForm.value);
  
    this.authService.login(this.loginForm.value).subscribe((Response) => {
      console.log(Response);
      if(Response.userId != null){
      this.snackbar.open('Login Successful', 'Close', {
        duration: 5000});
      this.router.navigateByUrl('/dashboard');
      } else {
        this.snackbar.open('Invalid credentials', 'Close', {
          duration: 5000, panelClass: 'error-snackbar'})
      }
    });
  }

}
