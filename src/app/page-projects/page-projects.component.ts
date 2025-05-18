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
    new Project("Elite School", "Management", "https://github.com/Strangedip/ProjectE", "assets/img/prj.jpeg",["assets/png-icons/java.png","assets/png-icons/mysql.png","assets/png-icons/intellij.png"]),
    new Project("ColorMage", "BW to color", "https://github.com/Strangedip/ColorMage", "assets/img/colormage.png",["assets/png-icons/python.png","assets/png-icons/html-5.png","assets/png-icons/css-3.png","assets/png-icons/vscode.png"]),
    new Project("Dev-Strangedip", "Portfolio", "https://github.com/Strangedip/Portfolio", "assets/img/portfolio.png",["assets/png-icons/angular.png","assets/png-icons/typescript.png","assets/png-icons/html-5.png","assets/png-icons/css-3.png","assets/png-icons/vscode.png"])];
}

class Project {
  name: String;
  desc: String;
  link: String;
  src: String;
  techs:String[];
  constructor(name: String, desc: String, link: String, src: String, techs :String[]) {
    this.name = name;
    this.desc = desc;
    this.link = link;
    this.src = src;
    this.techs=techs;
  }
}


