import { Component } from '@angular/core';
import { User } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced-angular';

  rememberMe: Boolean = false;

  createUser(emittedUser: User){
    console.log('created account', emittedUser);
  }

  loginUser(emittedUser: User){
    console.log('logged account', emittedUser);
  }

  handleRemember(remember:  Boolean){
    this.rememberMe = remember;
  }
}
