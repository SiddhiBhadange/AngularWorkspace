import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username: any='';
password: any='';
 submit(myform:any){
  //console.log(myform.value)
  this.username=myform.value.username
  this.password=myform.value.password
 }

 abc(){
   console.log(this.username);
 }
}
