import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'float-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './float-navbar.component.html',
  styleUrls: ['./float-navbar.component.scss']
})
export class FloatNavbarComponent implements OnInit {
  sections: NavSection[] = [
    { id: 'section-intro', label: 'Hello' },
    { id: 'section-about', label: 'About' },
    { id: 'section-skills', label: 'Skills' },
    { id: 'section-projects', label: 'Projects' },
    { id: 'section-contact', label: 'Contact' }
  ];

  activeSection: string = 'section-intro';
  isScrolling: boolean = false;
  isScrolled: boolean = false;
  private scrollTimeout: any;

  ngOnInit() {
    this.setInitialActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.isScrolling) {
      this.updateActiveSection();
    }
    this.isScrolled = window.scrollY > 100;

    // Clear any existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set a new timeout to detect when scrolling has stopped
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.updateActiveSection();
    }, 150);
  }

  private setInitialActiveSection() {
    const scrollPosition = window.scrollY;
    this.updateActiveSection();
    this.isScrolled = scrollPosition > 100;
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const offset = windowHeight * 0.3;

    let closestSection = this.sections[0];
    let closestDistance = Infinity;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      }
    }

    this.activeSection = closestSection.id;
  }

  scrollTo(sectionId: string) {
    this.isScrolling = true;
    this.activeSection = sectionId; // Update active section immediately

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Use a shorter timeout and update active section again after scroll
      setTimeout(() => {
        this.isScrolling = false;
        this.updateActiveSection();
      }, 500);
    }
  }
}
