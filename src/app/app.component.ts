import { Component } from '@angular/core';
import { User } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced-angular';

  handleSubmit(emittedUser: User){
    console.log(emittedUser);
  }
}
