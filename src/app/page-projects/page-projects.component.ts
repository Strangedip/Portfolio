import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageProjectsComponent {

  projects: Project[] = [
    new Project(
      "Elite School",
      "A comprehensive elite school management platform enabling students earn essential just by skills and acheivements",
      "https://github.com/Strangedip/EliteSchool",
      "assets/img/elite-school.jpg",
      [
        "assets/png-icons/springboot.png",
        "assets/png-icons/angular.png",
        "assets/png-icons/java.png",
        "assets/png-icons/postgre.png",
        "assets/png-icons/intellij.png"
      ],
      "https://elite-school-demo.com"
    ),
    new Project(
      "ColorMage",
      "AI-powered tool that transforms black & white images into vibrant color. Creative and restoration project",
      "https://github.com/Strangedip/ColorMage",
      "assets/img/colormage.png",
      [
        "assets/png-icons/python.png",
        "assets/png-icons/html-5.png",
        "assets/png-icons/css-3.png",
        "assets/png-icons/vscode.png"
      ],
      "https://colormage-demo.com"
    ),
    new Project(
      "(This Portfolio)",
      "My personal developer portfolio, built with Angular18, showcasing my projects, skills, and contact info.",
      "https://github.com/Strangedip/Portfolio",
      "assets/img/portfolio.png",
      [
        "assets/png-icons/angular.png",
        "assets/png-icons/typescript.png",
        "assets/png-icons/html-5.png",
        "assets/png-icons/css-3.png",
        "assets/png-icons/vscode.png"
      ],
      "https://portfolio-demo.com"
    )
  ];
}

class Project {
  name: String;
  desc: String;
  link: String;
  src: String;
  techs: String[];
  demo?: String;
  constructor(name: String, desc: String, link: String, src: String, techs: String[], demo?: String) {
    this.name = name;
    this.desc = desc;
    this.link = link;
    this.src = src;
    this.techs = techs;
    this.demo = demo;
  }
}


