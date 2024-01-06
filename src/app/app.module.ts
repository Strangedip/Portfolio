import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatNavbarComponent } from './float-navbar/float-navbar.component';
import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { CommonModule } from '@angular/common';
import { LogoBannerComponent } from './logo-banner/logo-banner.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { HamNavbarComponent } from './ham-navbar/ham-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatNavbarComponent,
    PageIntroComponent,
    PageSkillsComponent,
    PageProjectsComponent,
    PageContactComponent,
    LogoBannerComponent,
    PageAboutComponent,
    HamNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
