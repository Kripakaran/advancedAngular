import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent implements OnInit {

  
  @Output()
  check: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxClick(event : any){
    // console.log(event.target.checked);
    this.check.emit(event.target.checked);
  }

}
