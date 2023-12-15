import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngProject';

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    // to move navbar up or down
    const container = document.querySelector('.container');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (container) {
      if (scrollPosition > 470) {
        container?.classList.add('bottom');
      } else {
        container?.classList.remove('bottom');
      }
    }

  }
}
