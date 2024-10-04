import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularProject';

  num=10;
  obj={
    "name":"xyz"
  }

  arr=[1,2,3,4,5]

  isvalid=true

  vali=20 

  wanttodisable=true

  click(){
    const a=10;
    const b=20;
    console.log("clicked!")
    console.log(a+b)
  }

  mouseover(){
    alert("mouse over")
  }
  // mouseout(){
  //   alert("mouse out")
  // }

  myval=10
}
