import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';

import { WeatherDetailComponent } from "../../componentes/weather-detail/weather-detail.component";
import { FechaAnombreDiaPipe } from '../../pipes/fecha-anombre-dia.pipe';
import { FormatearFechaPipe } from '../../pipes/formatear-fecha.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule
  ],
  declarations: [ClimaPage, WeatherDetailComponent, FechaAnombreDiaPipe, FormatearFechaPipe]
})
export class ClimaPageModule {}
