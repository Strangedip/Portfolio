import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'float-navbar',
  templateUrl: './float-navbar.component.html',
  styleUrls: ['./float-navbar.component.scss'],
})
export class FloatNavbarComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    document.querySelector(`a[id="section-intro-"]`)?.classList.add('active');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    // to move navbar up or down
    const navContainer = document.querySelector('.float-container');
    const navbar = document.querySelector('.navbar');
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
      section.classList.remove('active');
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const bottom = section.getBoundingClientRect().bottom;
      const id = section.getAttribute('id');
      if (top >= (0 - (windowHeight*(65/100))) && top < (windowHeight*(35/100))) {
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
  }
}
