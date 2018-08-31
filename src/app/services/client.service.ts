import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  cliente=[{
    codigo:'Codigo',
    cuit_dni:'DNI',
    razon_social:'Razon Social',
    nombre_ficitio:'Nombre ficticio',
    direccion:'Dirección',
    con_iva:'monotributista'
  }]
  constructor() { }

  getClient(){
    return this.cliente;
  }
}
