import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude:any=0;
  longitude:any=0;

  constructor(
    private geolocation:Geolocation
  ) {
  
  }

  options={
    timeout:1000,
    enableHighAccury:true,
    maximunAge:3600
  };
  getCurrentCoordinates(){
      this.geolocation.getCurrentPosition().then((resp)=>{
      this.latitude=resp.coords.latitude;
      this.longitude=resp.coords.longitude;
    }).catch((error)=>{
     console.log('Error, no se puede obtener tu ubicacion',error); 
    });

  }
    
  abrirGoogleMaps(){
    const Enlace = `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
    window.open(Enlace, '_system');
    }
  
}
