import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBannerComponent } from './logo-banner/logo-banner.component';
import { FloatNavbarComponent } from './float-navbar/float-navbar.component';
import { HamNavbarComponent } from './ham-navbar/ham-navbar.component';
import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageIntroMobileComponent } from './page-intro-mobile/page-intro-mobile.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageAboutMobileComponent } from './page-about-mobile/page-about-mobile.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageContactComponent } from './page-contact/page-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LogoBannerComponent,
    FloatNavbarComponent,
    HamNavbarComponent,
    PageIntroComponent,
    PageIntroMobileComponent,
    PageAboutComponent,
    PageAboutMobileComponent,
    PageSkillsComponent,
    PageProjectsComponent,
    PageContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  isLoaded = false;
  desktopMode = true;
  mobileMode = false;

  ngOnInit() {
    // Set initial load state
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);

    // Check screen size and set mode
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngAfterViewInit() {
    // Initialize intersection observer for section animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  private checkScreenSize() {
    this.desktopMode = window.innerWidth > 768;
    this.mobileMode = !this.desktopMode;
  }
}
