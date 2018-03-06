import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Farmacia } from '../entity/farmacia';
@Component({
  
  selector: 'page-gestionFarmacias',
  templateUrl: 'gestionFarmacias.html'

})
export class GestionFarmacias {
   farmacias :Farmacia[] = new Array(); 
  
  constructor(public navCtrl: NavController) {
    for( var i=0; i<10 ; i++)
    {
     let farmacia : Farmacia; 
     farmacia = new Farmacia(i);
     farmacia.nombre = "farmacia" + i.toString();  
     this.farmacias.push(farmacia)
    }
    }
     onClick(nombre:string){
      console.log(nombre);
    }
  
}
