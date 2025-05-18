import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageSkillsComponent {
  programmingLanguages: Skill[] = [
    {
      name: 'Java',
      icon: 'assets/png-icons/java.png'
    },
    {
      name: 'TypeScript',
      icon: 'assets/png-icons/typescript.png'
    },
    {
      name: 'Python',
      icon: 'assets/png-icons/python.png'
    },
    {
      name: 'JavaScript',
      icon: 'assets/png-icons/js.png'
    },
    {
      name: 'SQL',
      icon: 'assets/png-icons/sql.png'
    }
  ];

  frameworks: Skill[] = [
    {
      name: 'Angular',
      icon: 'assets/png-icons/angular.png'
    },
    {
      name: 'Spring Boot',
      icon: 'assets/png-icons/springboot.png'
    },
    {
      name: 'React',
      icon: 'assets/png-icons/react.png'
    },
    {
      name: 'Bootstrap',
      icon: 'assets/png-icons/bootstrap.png'
    }
  ];

  databases: Skill[] = [
    {
      name: 'MySQL',
      icon: 'assets/png-icons/mysql.png'
    },
    {
      name: 'PostgreSQL',
      icon: 'assets/png-icons/postgre.png'
    },
    {
      name: 'MS SQL Server',
      icon: 'assets/png-icons/sql-server.png'
    },
    {
      name: 'MongoDB',
      icon: 'assets/png-icons/mongodb.png'
    },
    {
      name: 'Redis',
      icon: 'assets/png-icons/redis.png'
    }
  ];

  tools: Skill[] = [
    {
      name: 'GitHub',
      icon: 'assets/png-icons/github.png'
    },
    {
      name: 'BitBucket',
      icon: 'assets/png-icons/bitbucket.png'
    },
    {
      name: 'Firebase',
      icon: 'assets/png-icons/firebase.png'
    },
    {
      name: 'Docker',
      icon: 'assets/png-icons/docker.png'
    },
    {
      name: 'Postman',
      icon: 'assets/png-icons/postman.png'
    },
    {
      name: 'Jira',
      icon: 'assets/png-icons/jira.png'
    },
    {
      name: 'VS Code',
      icon: 'assets/png-icons/vscode.png'
    },
    {
      name: 'IntelliJ IDEA',
      icon: 'assets/png-icons/intellij.png'
    }
  ];
  others: Skill[] = [
    {
      name: 'HTML5',
      icon: 'assets/png-icons/html-5.png'
    },
    {
      name: 'CSS3',
      icon: 'assets/png-icons/css-3.png'
    },
    {
      name: 'SCSS',
      icon: 'assets/png-icons/scss.png'
    },
  ];
}
