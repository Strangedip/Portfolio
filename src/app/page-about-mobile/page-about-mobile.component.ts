import { Component, HostListener, OnInit } from '@angular/core';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'page-about-mobile',
  templateUrl: './page-about-mobile.component.html',
  styleUrls: ['./page-about-mobile.component.scss']
})
export class PageAboutMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(tabName: string) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      const element = document.querySelector(`#${tabName}`);
      console.log(tab, element);
      if (element) {
        element.classList.add('active');
      }
      else {
        tab.classList.remove('active');
      }
    })

  }
}
