import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username:any=''
 password:any=''

 constructor(private r:Router){

 }


 login(){
  if(this.username==="siddhi" && this.password==="123"){
    this.r.navigate(['/home']);
  }else
  {
    alert("Invalid credientials")
    this.r.navigate(['/login']);
  }
 }
}
