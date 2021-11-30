import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string='';

  usuario = {
    email:'',
    password: '',
    repassword:''
  };

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado Exitosamente',
      duration: 2000
    });
    toast.present();
  }
  
  onSubmit(){
    this.presentToast()
    console.log(this.usuario);
  }

}
