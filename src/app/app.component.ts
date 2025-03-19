import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DemoAngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ], // ✅ Add this here!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedForm: string = ''; 
  selectedLanguages: string[] = [];
  title = 'Employee-Feedback-Management-Solution';

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
