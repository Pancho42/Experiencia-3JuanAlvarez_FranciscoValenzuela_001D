import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators'
import { AlertController } from "@ionic/angular";

import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private AFauth : AngularFireAuth, private router: Router, public alertController: AlertController){}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No tienes acceso a esta página',
      message: 'Para acceder a esta página necesitas entrar con un usuario registrado',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map( auth => {
        
        if(auth === null){
          this.router.navigate(['/login']);
          this.presentAlert();
          return false;
        }else{
          return true;
        }
      }))

    
  }
  
}
/*
El objetivo de este guard es bloquear las páginas para usuarios invitados, si el auth es null, osea que
no haya iniciado sesión, lo devolverá a la page del login y saltará una alerta notificando al usuario
invitado que no tiene acceso a esta página
*/