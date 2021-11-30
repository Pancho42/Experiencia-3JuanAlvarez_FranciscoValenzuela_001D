import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Datos{

  id: number,
  ntrabajo: number,
  nombres: string,
  apellidos: string,
  telefono: number,
  correo: string,
  curri: File,
  mensaje: string,
  modified: number
}


const ITEMS_KEY = 'my-datos';


@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;
  constructor(private storage: Storage) { 
    this.init(); //init es el metodo 
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

//Crear va afuera como método independientes

addDatos(dato: Datos): Promise<any>{ //una promesa es una respuesta al método, que devuelve un objeto
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{ //items key es la constante definida arriba
    if (datos) {
      datos.push(dato);//push toma el nuevo objeto y lo agrega a la colección
      return this.storage.set(ITEMS_KEY, datos);//acá en caso de aceptarlo modifica el set de claves
    }else {
      return this.storage.set(ITEMS_KEY, [dato]);//en caso de que no, lo devuelve, pero de 1 objeto datos
    }

  })

}


//Leer

getDatos(): Promise<Datos[]>{//la promesa ahora es una colección de la interface DATOS, que se devuelve
  return this.storage.get(ITEMS_KEY);//NO RECIBE PARAMETROS, devuelve las claves
}

//Actualizar
//Para encontrar hay que buscar en ciclos y comparar las claves del objeto a actualizar con las claves de los objetos almacenados
//
updateDatos(dato: Datos): Promise<any>{//recibe parametros llamado datos
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{//trae las claves almacenadas por cada objeto, las direcciona a datos (colecicón)
    if (!datos || datos.length == 0){
      return null;
    }
    let newDato: Datos[] = [];//newdatos se crea como objeto
    for (let i of datos){//ciclo for recorre datos
      if (i.id === dato.id){//comparando los id de los objetos a actualizar
        newDato.push(dato);
      }
      else{
        newDato.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, newDato);//el recorrido toma la colección generada (newdato) y modifica el storage a través del set, con la nueva colección 
  });

}

//Eliminar

deleteDatos(id: number): Promise<Datos>{//recibe el id, no el objeto, así el metodo devuelve una promesa (datos)
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{//el storage almacena en un objeto DATOS
    if (!datos || datos.length === 0){
      return null;
    }
    let toKeep: Datos[] = []; 
    for (let i of datos){
      if (i.id !== id){//para eliminar todo lo distinto a la id, se envia a la nueva colección(toKeep). LO OTRO SE ELIMINA
        toKeep.push(i);//el push envia la ubicación al tokeep
      }
    }
    return this.storage.set(ITEMS_KEY, toKeep);//se envia al items key la nueva colección que es el tokeep
  });



}





}


