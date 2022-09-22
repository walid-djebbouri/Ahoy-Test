import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Covid19Service} from "./services/covid-19.service";
import {covidInterceptor} from "./interceptors/covid-interceptor";
import { CovidMapComponent } from './covid-map/covid-map.component';
import { HistoryPerCountryComponent } from './history-per-country/history-per-country.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    CovidMapComponent,
    HistoryPerCountryComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [
    Covid19Service,
    {provide: HTTP_INTERCEPTORS, useClass: covidInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
