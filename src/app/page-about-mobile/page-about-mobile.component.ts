import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'page-about-mobile',
  templateUrl: './page-about-mobile.component.html',
  styleUrls: ['./page-about-mobile.component.scss']
})
export class PageAboutMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(tabName : string){
    const tabs = document.querySelectorAll('tab');
    tabs.forEach(tab=>{
      const element = document.querySelector(`${tabName}`);
      if(tab == element){
        element.classList.add('active');
      }
      else{
        
      }
    })
    
  }
}
