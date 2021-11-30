import { Component } from '@angular/core';
import { AuthService } from "./servicios/auth.service";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public authservice: AuthService) {}

  
  
  Onlogout(){
    this.authservice.logout();
  }
}

