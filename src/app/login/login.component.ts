import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// [x: string]: any;
dat2:any;
data1:any={};
selected = false;
fun(event:Event){
  event.preventDefault();
  this.selected = true;
}
login(formval: any) {
  console.log(formval);
  // Further processing or API call for login
}

}
