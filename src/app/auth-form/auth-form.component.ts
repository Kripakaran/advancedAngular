import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { User } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})



export class AuthFormComponent implements OnInit {

  title: string = 'login';

  @Output()
  submittedUser: EventEmitter<User> = new EventEmitter();

 // @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

 // @ViewChild(AuthMessageComponent)
 // message: AuthMessageComponent;

  // @ViewChild('email') email: ElementRef;

  // loggedIn: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(user: User){
    // console.log(user);
    this.submittedUser.emit(user);
  }

}
