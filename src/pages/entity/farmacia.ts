import { Component } from '@angular/core';
@Component({
    selector: 'page-farmacia',
   })
export class Farmacia {
    id : number; 
    nombre : string; 
    calle : string; 
    numero : string; 
    telefono : string; 
    email : string; 
    constructor(id : number){
        this.id = id; 
        }
  
     muestraNombre(){
        return this.nombre; 
    }

}