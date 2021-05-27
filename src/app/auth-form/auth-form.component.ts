import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})



export class AuthFormComponent implements OnInit {

  @Output()
  submittedUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(user: User){
    console.log(user);
    this.submittedUser.emit(user);
  }

}
