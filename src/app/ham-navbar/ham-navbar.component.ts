import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ham-navbar',
  templateUrl: './ham-navbar.component.html',
  styleUrls: ['./ham-navbar.component.scss']
})
export class HamNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('#section-intro-')?.classList.add('active');
  }

  isNavbarOpen: boolean = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  sectionList = {
    'section-intro': false,
    'section-about': false,
    'section-skills': false,
    'section-projects': false,
    'section-contact': false
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const sections = document.querySelectorAll('section');

  //   sections.forEach(section => {
  //     const top = section.getBoundingClientRect().top;
  //     const id = section.getAttribute('id');

  //     // Adjust these values based on your design
  //     const thresholdTop = window.innerHeight * 0.65;
  //     const thresholdBottom = window.innerHeight * 0.35;

  //     if (top >= -thresholdTop && top < thresholdBottom) {
  //       for (let sec in this.sectionList) {
  //         if (id == sec) {
  //           sec = true;
  //         }
  //         else {
  //           sec = false;
  //         }
  //       }
  //     }
  //   });
  // }
  // introActive: boolean = true;
  // aboutActive: boolean = false;
  // skillsActive: boolean = false;
  // projectActive: boolean = false;
  // contactActive: boolean = false;
  // activateNavbarTab(id: string | null): void {
  //   const element = document.querySelector(`#${id}-`);
  //   if (element) {
  //     console.log(element);
  //     element.classList.remove('inactive');
  //     element.classList.add('active');
  //   }
  // }

  // deactivateNavbarTab(id: string | null): void {
  //   const element = document.querySelector(`#${id}-`);
  //   if (element) {
  //     element.classList.remove('active');
  //     element.classList.add('inactive');
  //   }
  // }

  // click tab scrolls
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // this.isNavbarOpen=!this.isNavbarOpen;
  }
}
