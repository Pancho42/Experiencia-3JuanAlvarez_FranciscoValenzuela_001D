import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { promise } from 'protractor'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router) { }
  
  login(email:string, password:string){
    
    return new Promise((resolve, rejected) =>{

      this.AFauth.signInWithEmailAndPassword(email, password).then(user => { 
        resolve(user);
      }).catch(err => rejected(err));
    })
  }

  logout(){
    this.AFauth.signOut().then( auth => {
      this.router.navigate(['/login']);
    })
  }
}
/*
el metodo de login sirve para que el usuario pueda ingresar con su correo y contraseña, si estos se ingresan
correctamente puede iniciar sesión, caso contrario este no podra iniciar sesión

el metodo logout sirve para cerrar sesión, y este será devuelto nuevamente al page de login
*/ 