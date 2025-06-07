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
      "DashLink",
      "Webapplication to store bookmarks of places locations links ets.",
      "https://github.com/Strangedip/Dashlink",
      "assets/img/dashlink.png",
      [
        "assets/png-icons/angular.png",
        "assets/png-icons/typescript.png",
        "assets/png-icons/firebase.png",
        "assets/png-icons/html-5.png",
        "assets/png-icons/scss.png",
        "assets/png-icons/cursor.png"
      ],
      "https://dashlink-prj.web.app", true
    ), new Project(
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
      "https://dev-strangedip.web.app", true
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
    )
  ];
}

class Project {
  name: String;
  desc: String;
  link: String;
  src: String;
  techs: String[];
  isDemoAvailable: boolean;
  demo?: String;
  constructor(name: String, desc: String, link: String, src: String, techs: String[], demo?: String, isDemoAvailable: boolean = false) {
    this.name = name;
    this.desc = desc;
    this.link = link;
    this.src = src;
    this.techs = techs;
    this.demo = demo;
    this.isDemoAvailable = isDemoAvailable;
  }
}


