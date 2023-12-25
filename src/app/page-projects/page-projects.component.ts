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
    new Project("Proj1", "proj1 desc", "proj1link", "assets/img/prj.jpeg"),
    new Project("Proj2", "proj2 desc", "proj2link", "assets/img/prj.jpeg"),
    new Project("Proj3", "proj3 desc", "proj3link", "assets/img/prj.jpeg")];
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


