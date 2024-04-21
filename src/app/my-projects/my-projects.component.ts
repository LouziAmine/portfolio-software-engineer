import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.sass'
})
export class MyProjectsComponent {
  // List1 ='assets/Image/My__Projects/List1.png';

  projectList = [
    {
      title: 'Call center management system',
      description: 'A software platform that is meant to manage and monitor call center operations.',
      imageUrl: 'assets/Image/My__Projects/List1.png'
    },

    {
      title: 'Call center management system',
      description: 'A software platform that is meant to manage and monitor call center operations.',
      imageUrl: 'assets/Image/My__Projects/List1.png'
    },

    {
      title: 'Call center management system',
      description: 'A software platform that is meant to manage and monitor call center operations.',
      imageUrl: 'assets/Image/My__Projects/List1.png'
    },

    {
      title: 'Call center management system',
      description: 'A software platform that is meant to manage and monitor call center operations.',
      imageUrl: 'assets/Image/My__Projects/List1.png'
    },

  ];
}
