import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/User';
import { FilesizePipe } from './filesize.pipe';


interface Files {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilesizePipe]
})



export class AppComponent {


  // @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

 
  
  
  // component : ComponentRef<AuthFormComponent>;
  // title = 'advanced-angular';

  // @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private cd : ChangeDetectorRef){}


  mapped: Files[] = [];
  files: Files[] = [
    {
      name: 'XXX',
      size: 21312314,
      type: 'image'
    },

    {
      name: 'XYZ',
      size: 2231312312,
      type: 'video'
    },

    {
      name: 'YYY',
      size: 1234,
      type: 'text'
    },
  ]


  



  // ngAfterViewInit(){
  //   const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
  //   const component2 = this.entry.createComponent(authFormFactory);
  //   this.component = this.entry.createComponent(authFormFactory);
  //   this.component.instance.title = 'create account'; // equivalent to @Input()
  //   this.component.instance.submittedUser.subscribe(res => {
  //     console.log(res);
  //   }); // equivalent to Output()

  //   this.entry.createEmbeddedView(this.tmpl, {
  //     $implicit: 'Kripakaran',
  //     location: 'Los Angeles'
  //   });

  //   this.cd.detectChanges();
  // }

  // // rememberMe: Boolean = false;

  // ctx =  {
  //   $implicit: 'Kripakaran',
  //   location: 'Los Angeles'
  // };

  // loginUser(emittedUser: User){
  //   console.log('logged account', emittedUser);
  // }

  // destroyComponent(){
  //   this.component.destroy();
  // }

  // moveComponent(){
  //   this.entry.move(this.component.hostView, 0);
  // }

}
