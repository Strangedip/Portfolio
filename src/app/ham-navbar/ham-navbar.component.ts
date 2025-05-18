import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ham-navbar',
  templateUrl: './ham-navbar.component.html',
  styleUrls: ['./ham-navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HamNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isNavbarClose: boolean = false;

  toggleNavbar(): void {
    this.isNavbarClose = !this.isNavbarClose;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isNavbarClose=!this.isNavbarClose;
    }
  }
}
