import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadCsvComponent } from './download-csv/download-csv.component';
import { FloatNavbarComponent } from './float-navbar/float-navbar.component';
import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { CommonModule } from '@angular/common';
import { LogoBannerComponent } from './logo-banner/logo-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadCsvComponent,
    FloatNavbarComponent,
    PageIntroComponent,
    PageSkillsComponent,
    PageProjectsComponent,
    PageContactComponent,
    LogoBannerComponent
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
