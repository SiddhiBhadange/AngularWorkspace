import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesProject';

  color="yellow";
  
  data:any={
    username:"siddhi",
    password:"123"
  }

  numbers:any=[1,2,3,4]

  students:any=
    [
      {
        id:1,
        name:'ram',
        age:28
      },
      {
        id:2,
        name:'sham',
        age:27 
      },
      {
        id:3,
        name:'aham',
        age:26
      }
    ]
  }

