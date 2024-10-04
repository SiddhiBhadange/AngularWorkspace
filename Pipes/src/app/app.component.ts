import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  myName='siddhi';
  amount=50;
  num=1234.8734219

  student={
    Name:'siddhi',
    age:22
  }

  birthdate:any;
  gender='male'
  genderMapping={
    'male':'Mr.',
    'female':'Ms.'
  }

}
