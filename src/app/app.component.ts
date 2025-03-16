import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DemoAngularMaterialModule,
    LoginComponent,
    SignupComponent,
    ReactiveFormsModule,
    FormsModule,  // ✅ Add this here!

  ], // ✅ Add this here!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedForm: string = ''; 
  selectedLanguages: string[] = [];

  addLanguage() {
    const languageSelect = document.getElementById('languageSelect') as HTMLSelectElement;
    const selectedValue = languageSelect.value;

    if (selectedValue && !this.selectedLanguages.includes(selectedValue)) {
      this.selectedLanguages.push(selectedValue);
    }
   languageSelect.value = '';
  }
  removeLanguage(lang: string) {
    this.selectedLanguages = this.selectedLanguages.filter(l => l !== lang);
  }
}
