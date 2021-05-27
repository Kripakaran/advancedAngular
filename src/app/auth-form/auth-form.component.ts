import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { User } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})



export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Output()
  submittedUser: EventEmitter<User> = new EventEmitter();

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @ViewChild(AuthMessageComponent)
  message: AuthMessageComponent;

  loggedIn: Boolean = false;

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {

    if(this.remember){
    // console.log(this.remember);
    this.remember?.check.subscribe(res => {
      this.loggedIn = res;
    })
  }
  }

  ngAfterViewInit(){
     // console.log(this.message);
     if(this.message){
      this.message.days = 30;
      }
     this.cd.detectChanges();
}

  onSubmit(user: User){
    // console.log(user);
    this.submittedUser.emit(user);
  }

}
