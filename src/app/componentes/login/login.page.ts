import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, public ToastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.ToastController.create({
      message: 'Bienvenid@ Usuario de Prueba',
      duration: 2000
    });
    toast.present();
  }

  async incorrecto() {
    const toast = await this.ToastController.create({
      message: 'Los datos son incorrectos o el usuario no existe',
      duration: 2000
    });
    toast.present();
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res => {
      this.router.navigate(['/inicio']), this.presentToast();
    }).catch(err => this.incorrecto())

    
  }
}
/*
el metodo onsubmitlogin sirve para cuando el usuario de click en el boton de iniciar sesión, comience la 
autenticación del usuario, si los datos corresponde, los redirigirá al inicio y saltará un mensaje que le 
dará la bienvenida al usuario, si son incorrectos o se deja vacio, saltará un mensaje donde se le notifica 
al usuario que no se ingreso bien los datos o el usuario no existe
*/