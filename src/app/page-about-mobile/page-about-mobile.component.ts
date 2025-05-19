import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-about-mobile',
  templateUrl: './page-about-mobile.component.html',
  styleUrls: ['./page-about-mobile.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageAboutMobileComponent {
  isSelf = true;
  isEdu = false;
  isExp = false;

  toggle(section: 'self' | 'edu' | 'exp') {
    // Reset all sections
    this.isSelf = false;
    this.isEdu = false;
    this.isExp = false;

    // Set the selected section
    switch (section) {
      case 'self':
        this.isSelf = true;
        break;
      case 'edu':
        this.isEdu = true;
        break;
      case 'exp':
        this.isExp = true;
        break;
    }
  }
}
