import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio Project';
  desktopMode = true;
  mobileMode = false;

  ngOnInit(): void {
    if (window.innerWidth < 750) {
      this.desktopMode = false;
      this.mobileMode = true;
    }
    else {
      this.desktopMode = true;
      this.mobileMode = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 750) {
      console.log('mobile');
      this.desktopMode = false;
      this.mobileMode = true;
    }
    else {
      this.desktopMode = true;
      this.mobileMode = false;
    }
  }
}
