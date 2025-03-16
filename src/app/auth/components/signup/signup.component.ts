import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  signupForm : FormGroup;
  hidePassword = true;
  constructor(private fb: FormBuilder){
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      Password: [null, [Validators.required]],
     
    });

  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit(){

  console.log(this.signupForm.value);
    
  }
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


