import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // ✅ Add this here!
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
  }
}
