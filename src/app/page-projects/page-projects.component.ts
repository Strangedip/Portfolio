import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss']
})
export class PageProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [
    new Project("Elite School", "Management", "https://github.com/Strangedip/ProjectE", "assets/img/prj.jpeg"),
    new Project("ColorMage", "BW to color", "https://github.com/Strangedip/ColorMage", "assets/img/colormage.png"),
    new Project("Dev-Strangedip", "Portfolio", "https://github.com/Strangedip/Portfolio", "assets/img/portfolio.png")];
}

class Project {
  name: String;
  desc: String;
  link: String;
  src: String;
  constructor(name: String, desc: String, link: String, src: String) {
    this.name = name;
    this.desc = desc;
    this.link = link;
    this.src = src;
  }
}


