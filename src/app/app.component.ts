import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef
  

  title = 'advanced-angular';



  constructor(private resolver: ComponentFactoryResolver, private cd : ChangeDetectorRef){}

  ngAfterViewInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);

    this.cd.detectChanges();
  }

  // rememberMe: Boolean = false;




  loginUser(emittedUser: User){
    console.log('logged account', emittedUser);
  }


}
