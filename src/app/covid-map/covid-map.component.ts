import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import countries from '../countries.geo.json'
import {Layer} from "leaflet";
import {Covid19Service} from "../services/covid-19.service";

@Component({
  selector: 'app-covid-map',
  templateUrl: './covid-map.component.html',
  styleUrls: ['./covid-map.component.css']
})
export class CovidMapComponent implements OnInit {
  map: any;
  geoJson: any;
  constructor(private service: Covid19Service) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([19, 0], 2);

    const lt : any = countries['data'];

    this.service.getStatistics().subscribe( (response: any[]) => {
      response.forEach( e => {
        lt.features.find( (feature: any) => {
          if(feature.properties.name.match(e.country)) {
            feature.properties.newCases = e.cases.active
          }
        }
        )
      } );
      this.geoJson = L.geoJson(lt, {
        style: feature => this.style(feature) ,
        onEachFeature:  (feature, layer) => this.onEachFeature(feature, layer)
      }).addTo(this.map);

      /**** legend part ***/

      /********************/



    });
  }



   public getColor(d: number) {
    return d > 2000000 ? '#800026' :
           d > 50000  ? '#BD0026' :
           d > 20000  ? '#E31A1C' :
           d > 10000  ? '#FC4E2A' :
           d > 5000   ? '#FD8D3C' :
           d > 2000   ? '#FEB24C' :
           d > 100   ? '#FED976' :
           '#FFEDA0';
  }

   style(feature: any) {
    return {
      fillColor: this.getColor(feature.properties.newCases),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

   highlightFeature(e: any) {
    const layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  resetHighlight(e: any) {
    this.geoJson.resetStyle(e.target);
  }

  zoomToFeature(e: any) {
    this.map.fitBounds(e.target.getBounds());
  }



  onEachFeature(feature: any, layer: Layer) {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.zoomToFeature
    });
  }

 /**************** Info ********************/


// method that we will use to update the control based on feature properties passed

  /************************************/

}
