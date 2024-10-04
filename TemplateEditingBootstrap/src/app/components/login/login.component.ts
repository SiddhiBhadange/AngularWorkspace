import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   username:any=''
   password:any =''

   login(){
    const username: any = (document.getElementById('username') as HTMLInputElement).value;
    const password: any = (document.getElementById('password') as HTMLInputElement).value;

    alert(`Username: ${username}\nPassword: ${password}`);
   }
}
