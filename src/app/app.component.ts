import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StorageService } from './auth/services/storage/storage.service'; // Adjust the path as needed

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

  isEmployeeLoggedIn: boolean = StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    });
  }

  logout(){
    StorageService.logout();
    this .router.navigate(['/login']);
  }

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
