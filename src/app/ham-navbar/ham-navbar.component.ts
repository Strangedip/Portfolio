import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ham-navbar',
  templateUrl: './ham-navbar.component.html',
  styleUrls: ['./ham-navbar.component.scss']
})
export class HamNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isNavbarOpen: boolean = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isNavbarOpen=!this.isNavbarOpen;
    }
  }
}
