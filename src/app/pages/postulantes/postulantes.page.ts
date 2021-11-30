import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.page.html',
  styleUrls: ['./postulantes.page.scss'],
})
export class PostulantesPage implements OnInit {



  datos:Datos[]; //colección en formato JSON
  newDato: Datos = <Datos>{};// Un objeto del tipo datos, del tipo interface, que es devuelto

  @ViewChild('myList')myList :IonList; 
  alertController: any;
  constructor(private storageService: ServicedatosService, 
    private plt: Platform, //ios y android
    private toastController: ToastController) {//mensajitos
      this.plt.ready().then(()=>{//metodo de acceso a la info del objeto,si está activa la plataforma
        this.loadDatos(); //se invoca loadDatos
      });
    }
  ngOnInit() {
  }

   //Read

loadDatos(){

  this.storageService.getDatos().then(datos=>{//get datos se asume que está en el servicio (metodo)
    this.datos=datos;//datos es arreglo que se asigna
  });

}

//create

addDatos(){

  this.newDato.modified = Date.now();//fecha modificación
  this.newDato.id = Date.now();//id del dato
  this.storageService.addDatos(this.newDato).then(dato=>{//se pasa por el storage y se agrega el datos
    this.newDato = <Datos>{};//dato creado será recibido por dato
    this.showToast('Postulación Enviada Exitosamente');
    this.loadDatos();//se envia datos agregos
  });

}

//update

updateDatos(dato: Datos ){

  dato.nombres = `UPDATED: ${dato.nombres}`;//accede por javascrip al contenido al momento de actualizar. mostrando el nombre
  dato.modified = Date.now();//modifica la fecha
  this.storageService.updateDatos(dato).then(item=>{//se llama al objeto del constructor, enviando el objeto dato
    this.showToast('Postulación Actualizada')//la alerta
    this.myList.closeSlidingItems();//en la lista cerrará el sliding
    this.loadDatos();//se cargan datos
  });

} 
//delete 

deleteDatos(dato: Datos){
  this.storageService.deleteDatos(dato.id).then(item=>{//recibe objetos, pero envia el id de tipo number
    this.showToast('Postulación Eliminada');//se manda el mensaje por el toast
    this.myList.closeSlidingItems();//cierra también el sliding de los items
    this.loadDatos();//carga los datos 
  });

}

async showToast(msg){
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}


}
