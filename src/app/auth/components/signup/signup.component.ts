import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
   
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  signupForm : FormGroup;
  hidePassword = true;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
  ){
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
     
    });

  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit(){

  console.log(this.signupForm.value);
 const password = this.signupForm.get('password')?.value;
 const confirmPassword = this.signupForm.get('confirmPassword')?.value;
 if(password !== confirmPassword){
   this.snackbar.open('Passwords do not match', 'Close', {
     duration: 5000, panelClass: 'error-snackbar'
   });
   return;
  }
  this.authService.signup(this.signupForm.value).subscribe(
    (response) => {
      console.log(response);
      if(response.id !== null){
      this.snackbar.open('Signup Successful', 'Close', {
        duration: 5000, panelClass: 'success-snackbar'
      });
      this.router.navigate(['/login']);
    }else{
      this.snackbar.open('Signup Failed.  Try again', 'Close', {
        duration: 5000, panelClass: 'error-snackbar'
      });
    }
    },
    (error) => {
      console.error(error);
      this.snackbar.open('Signup Failed', 'Close', {
        duration: 5000, panelClass: 'error-snackbar'
      });
    }
  );
 /*   email: new FormControl(''),
    password: new FormControl(''),
    });
  
    hidePassword: boolean = true;
    togglePasswordVisibility(): void {
      this.hidePassword = !this.hidePassword;
    }
    onSubmit(): void {
      if (this.signupForm.valid) {
        console.log('Form Submitted!', this.signupForm.value);
      }
    }
      */
  };
}

