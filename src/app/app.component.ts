import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

 
  
  
  component : ComponentRef<AuthFormComponent>;
  title = 'advanced-angular';

  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private cd : ChangeDetectorRef){}

  ngAfterViewInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component2 = this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'create account'; // equivalent to @Input()
    this.component.instance.submittedUser.subscribe(res => {
      console.log(res);
    }); // equivalent to Output()

    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Kripakaran',
      location: 'Los Angeles'
    });

    this.cd.detectChanges();
  }

  // rememberMe: Boolean = false;

  ctx =  {
    $implicit: 'Kripakaran',
    location: 'Los Angeles'
  };

  loginUser(emittedUser: User){
    console.log('logged account', emittedUser);
  }

  destroyComponent(){
    this.component.destroy();
  }

  moveComponent(){
    this.entry.move(this.component.hostView, 0);
  }

}
