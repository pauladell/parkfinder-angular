import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  //mapbox = mapboxgl as typeof mapboxgl;
  //map: mapboxgl.Map;
  map: any;
  position: any = [];
  marker = [];
  //style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  //lat = 43.1746;
  //lng = -2.4125;
  //zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    //this.mapbox.accessToken = environment.mapBoxToken;
  }
  /*buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }*/

  showPosition(position: any) {
    var latitude = position.coords.latitude;
    console.log(typeof latitude);
    var longitude = position.coords.longitude;
    //mapboxgl.accessToken ='pk.eyJ1IjoicGF1bGFkZWxsIiwiYSI6ImNraDlkbmhraDExbXoydGwyM2F0eWdvajUifQ.jJitMUl5FBkSMFc7CInRFg';
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
      'pk.eyJ1IjoicGF1bGFkZWxsIiwiYSI6ImNraDlkbmhraDExbXoydGwyM2F0eWdvajUifQ.jJitMUl5FBkSMFc7CInRFg'
    );
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    console.log(this.map);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }
}
