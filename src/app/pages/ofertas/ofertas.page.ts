import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  constructor(public alertController: AlertController, private toastController: ToastController) {}

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Postulación enviada correctamente',
      duration: 2000
    });
    toast.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Postula a este Empleo',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Tu Nombre'
        },
        {
          name: 'name2',
          type: 'email',
          placeholder: 'Tu Email'
        },
        {
          name: 'name3',
          type: 'number',
          placeholder: 'Tu Teléfono (Opcional)'
        },
        {
          name: 'name4',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Ingresar Mensaje'
        }
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            this.presentToast()
          }
        }
      ]
    });

    await alert.present();
  }
}