import { Component } from '@angular/core';
import { User } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced-angular';

  // rememberMe: Boolean = false;


  loginUser(emittedUser: User){
    console.log('logged account', emittedUser);
  }


}
