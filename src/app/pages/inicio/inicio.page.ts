import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componenente { 
  icon: string;
  name: string;
  redirecTo: string;
}
interface Slide{
  img: string;
  titulo: string; 
  desc: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componenente [] =[
    { 
      icon: 'wallet-outline',
      name: 'Ofertas de Empleo',
      redirecTo: '/ofertas' 
    },
    {
      icon: 'person-add-outline',
      name: 'Registrarse',
      redirecTo: '/registro' 
     },
  ]
  slides: Slide [] = [
    {
      img: '/asset/slide/adecco.jpg',
      titulo: 'Empleo Destacado',
      desc: 'Adecco busca bodegueros con Urgencia'
    },
    {
      img: '/asset/slide/garzona.jpg',
      titulo: 'Empleo Destacado',
      desc: 'Garzonas en la Región Metropolitana'
    },
    {
      img: '/asset/slide/karting.jpg',
      titulo: 'Empleo Destacado',
      desc: 'Encargados de Karting'
    },
  ]

constructor(private menuController: MenuController) { }


  ngOnInit() {
  }

  
  mostrarMenu(){

    this.menuController.open('first');

  }
}
