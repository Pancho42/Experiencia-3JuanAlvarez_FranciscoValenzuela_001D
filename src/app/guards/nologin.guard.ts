import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators'

import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  
  constructor(private AFauth : AngularFireAuth, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map( auth => {
        
        if(auth === null){
          return true;
        }else{
          this.router.navigate(['/inicio']);
          return false;
        }
      }))

    
  }
}
/*
El objetivo de este guard es bloquear las páginas para usuarios registrados, si el usuario inicio sesión, 
lo devolverá a la page del inicio, esto más que nada sirve para evitar que el usuario registrado no entre
a la page de registro o del login nuevamente (a no ser que cierre sesión)
*/