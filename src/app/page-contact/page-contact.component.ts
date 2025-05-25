import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PageContactComponent {
  copyEmail() {
    const email = 'sg02295@gmail.com';
    navigator.clipboard.writeText(email);
    alert('Email address copied to clipboard!');
  }
  popup(){
    alert('Resume is yet to be built and uploaded!');
  }
}
