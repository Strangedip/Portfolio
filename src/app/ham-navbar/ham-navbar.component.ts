import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ham-navbar',
  templateUrl: './ham-navbar.component.html',
  styleUrls: ['./ham-navbar.component.scss']
})
export class HamNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector(`a[id="section-intro-"]`)?.classList.add('active');
  }

  isNavbarOpen: boolean = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const navContainer = document.querySelector('.container');
    const navbar = document.querySelector('.ham-bar');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (navContainer) {
      if (scrollPosition > window.innerHeight/2.5) {
        navContainer.classList.add('scrolled');
        navbar?.classList.add('bottom');
      } else {
        navContainer.classList.remove('scrolled');
        navbar?.classList.remove('bottom');
      }
    }

    // to switch navbar tabs depending on scrolls
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const bottom = section.getBoundingClientRect().bottom;
      const id = section.getAttribute('id');
      if (top >= (0 - (windowHeight * (65 / 100))) && top < (windowHeight * (35 / 100))) {
        const element = document.querySelector(`a[id="${id}-"]`);
        if (element) {
          element.classList.add('active');
          element.classList.remove('inactive');
        }
      } else {
        const element = document.querySelector(`a[id="${id}-"]`);
        if (element) {
          element.classList.add('inactive');
          element.classList.remove('active');
        }
      }
    });
  }

  // click tab scrolls
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isNavbarOpen=!this.isNavbarOpen;
  }
}
