import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'
import { NologinGuard } from './guards/nologin.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then( m => m.OfertasPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'postulaciones',
    loadChildren: () => import('./pages/postulaciones/postulaciones.module').then( m => m.PostulacionesPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'postulantes',
    loadChildren: () => import('./pages/postulantes/postulantes.module').then( m => m.PostulantesPageModule),
    canActivate : [AuthGuard]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
Las páginas con canActivate AuthGuard, significa que solo tendrán acceso usuarios que hayan iniciado sesión.
Las páginas con canActivate Nologin, significa que solo tendrán acceso los usuarios invitados
*/