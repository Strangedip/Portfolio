import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

@Component({
  selector: 'page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageSkillsComponent {
  skillRows = [
    {
      type: 'Languages',
      skills: [
        { name: 'Java', icon: 'assets/png-icons/java.png', level: 90 },
        { name: 'TypeScript', icon: 'assets/png-icons/typescript.png', level: 85 },
        { name: 'Python', icon: 'assets/png-icons/python.png', level: 80 },
        { name: 'JavaScript', icon: 'assets/png-icons/js.png', level: 80 },
        { name: 'SQL', icon: 'assets/png-icons/sql.png', level: 75 }
      ]
    },
    {
      type: 'Frameworks',
      skills: [
        { name: 'Angular', icon: 'assets/png-icons/angular.png', level: 85 },
        { name: 'Spring Boot', icon: 'assets/png-icons/springboot.png', level: 75 },
        { name: 'Bootstrap', icon: 'assets/png-icons/bootstrap.png', level: 80 },
        { name: 'Django', icon: 'assets/png-icons/django.png', level: 60 },
        { name: 'Flask', icon: 'assets/png-icons/flask.png', level: 55 },        
        { name: 'Node.js', icon: 'assets/png-icons/node-js.png', level: 70 },
      ]
    },
    {
      type: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: 'assets/png-icons/postgre.png', level: 70 },
        { name: 'MS SQL Server', icon: 'assets/png-icons/sql-server.png', level: 65 },
        { name: 'MongoDB', icon: 'assets/png-icons/mongodb.png', level: 60 },
        { name: 'Redis', icon: 'assets/png-icons/redis.png', level: 55 },
        { name: 'MySQL', icon: 'assets/png-icons/mysql.png', level: 80 }
      ]
    },
    {
      type: 'Tools',
      skills: [
        { name: 'GitHub', icon: 'assets/png-icons/github.png', level: 90 },
        { name: 'BitBucket', icon: 'assets/png-icons/bitbucket.png', level: 70 },
        { name: 'Firebase', icon: 'assets/png-icons/firebase.png', level: 60 },
        { name: 'Docker', icon: 'assets/png-icons/docker.png', level: 65 },
        { name: 'Postman', icon: 'assets/png-icons/postman.png', level: 80 },
        { name: 'Jira', icon: 'assets/png-icons/jira.png', level: 75 },
        { name: 'VS Code', icon: 'assets/png-icons/vscode.png', level: 90 },
        { name: 'IntelliJ IDEA', icon: 'assets/png-icons/intellij.png', level: 85 },
        { name: 'Cursor', icon: 'assets/png-icons/cursor.png', level: 40 }
      ]
    },
    {
      type: 'Others',
      skills: [
        { name: 'HTML5', icon: 'assets/png-icons/html-5.png', level: 95 },
        { name: 'CSS3', icon: 'assets/png-icons/css-3.png', level: 90 },
        { name: 'SCSS', icon: 'assets/png-icons/scss.png', level: 85 },
        { name: 'Git', icon: 'assets/png-icons/git.png', level: 90 },
        { name: 'Linux', icon: 'assets/png-icons/linux.png', level: 85 },
        { name: 'Windows', icon: 'assets/png-icons/windows.png', level: 80 }
      ]
    }
  ];
}
