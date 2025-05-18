import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
