import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hai Welcome to My app Login Page';
  UserName:string="Satya1919";
  Password:string="Sai@123";
  imgscr2="https://th.bing.com/th/id/OIP.5CB0Ff3AwyyLL02qXlUeDQHaIj?w=191&h=220&c=7&o=5&dpr=1.5&pid=1.7";
  event(){
    console.log("this is event binding",this.title);
    console.log("UserId is:",this.UserName);
    console.log("Your Password is :",this.Password);
    alert ("Form Submitted SuccesFully");
  }
}
