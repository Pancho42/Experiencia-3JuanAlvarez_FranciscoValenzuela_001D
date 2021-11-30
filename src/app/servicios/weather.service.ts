import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private RUTA_API_UBICACION = "https://api.freegeoip.app/json/?apikey=57ed9ff0-3aba-11ec-b7d0-fb884efc1dbc";

  constructor() { }

  async obtenerDatosUbicacion() {
    const response = await fetch(this.RUTA_API_UBICACION);
    return await response.json();
  }

  async obtenerDatosDeClima(longitude: string, latitude: string) {
    const response = await fetch(`https://www.7timer.info/bin/api.pl?lon=-70.757&lat=-33.511&product=civillight&output=json`);
    return await response.json();
  }

  parsearFecha(value) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + "-" + mes + "-" + dia;
  }
}
