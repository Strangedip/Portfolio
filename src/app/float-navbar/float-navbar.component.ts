import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'float-navbar',
  templateUrl: './float-navbar.component.html',
  styleUrls: ['./float-navbar.component.scss']
})
export class FloatNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const navbar = document.querySelector('.float-container');
    if (navbar) {
      if (scrollPosition > 500) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
