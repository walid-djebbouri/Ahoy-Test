import {Component, OnInit} from '@angular/core';
import {Covid19Service} from "./services/covid-19.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AhoyTest';

  constructor(private service: Covid19Service) {}

  ngOnInit(): void {

   /* this.service.getCountries().subscribe(
      (countries) => {  console.log(countries) },
      (errors) => { console.log(errors) });

    this.service.getStatistics().subscribe(
      (statistics) => { console.log(statistics) } ,
      (errors) => { console.log(errors) });

    this.service.getHistory('use', new Date(2022, 2,6)).subscribe(
      (history) => { console.log(history) },
      (errors) => { console.log(errors) });*/

  }
}
