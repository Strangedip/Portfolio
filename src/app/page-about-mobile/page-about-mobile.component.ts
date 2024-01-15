import { Component, HostListener, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'page-about-mobile',
  templateUrl: './page-about-mobile.component.html',
  styleUrls: ['./page-about-mobile.component.scss']
})
export class PageAboutMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSelf=false;
  isEdu=false;
  isExp=false;
  isAdd=false;

  toggle(tabName: string) {
    switch (tabName) {
      case 'self':
        this.isSelf=!this.isSelf;
        break;
      case 'edu':
        this.isEdu=!this.isEdu;
        break;
      case 'exp':
        this.isExp=!this.isExp;
        break;
      case 'add':
        this.isAdd=!this.isAdd;
        break;
    }
  }
}
