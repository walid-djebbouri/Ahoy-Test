import { Component, OnInit } from '@angular/core';
import {Covid19Service} from "../services/covid-19.service";
import {ChartOptions} from "../statistics/statistics.component";

@Component({
  selector: 'app-history-per-country',
  templateUrl: './history-per-country.component.html',
  styleUrls: ['./history-per-country.component.css']
})
export class HistoryPerCountryComponent implements OnInit {

  public chartOptions:  Partial<ChartOptions>  | any ;
  public countries: string[] = [];
  public country: string = 'afghanistan';
  private  Data: number[] = [] ;
  private Date: string[] = [];



  constructor(private service: Covid19Service) { }

  ngOnInit(): void {
    this.service.getCountries().subscribe(countries => this.countries = countries.response);
   this.statisticOfThisMonth('Afghanistan');
  }

  formatDate(date: Date): string {
    let d: string | number = date.getDate() ;
    let m: string | number  = date.getMonth() + 1;
    let y: string = date.getFullYear().toString();
    date.getDate().toString().length == 1 ? d = '0'+ d : d = date.getDate().toString() ;
    date.getMonth().toString().length == 1 ? m = '0'+m.toString(10) : m = m.toString(10);

    return y + '-' + m + '-' + d ;
  }

  statisticOfThisMonth(country: string): void {
    this.Data = [];
    this.Date = [];
    const date = new Date();
    let i = 1;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate()
    let startDate = new Date(year,month,1)
    const currentDate = new Date(year,month,day)
    while ( startDate <= currentDate ) {
     this.service.getHistory(
        country,
        this.formatDate(startDate)
      ).subscribe(
        (data: any) => {
          let i
          data.response[0].cases.new == null ? i = 0 : i =  parseInt(data.response[0].cases.new)  ;
          this.Data.push(i)
          this.Date.push(data.parameters.day)

          this.chartOptions = {
            series: [
              {
                name: "Case",
                data: this.Data
              }
            ],
            chart: {
              height: 350,
              type: "bar",
              events: {

              }
            },
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            plotOptions: {
              bar: {
                columnWidth: "45%",
                distributed: true
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            grid: {
              show: true
            },
            xaxis: {
              categories: this.Date,
              labels: {
                style: {
                  colors: [
                    "#008FFB",
                    "#00E396",
                    "#FEB019",
                    "#FF4560",
                    "#775DD0",
                    "#546E7A",
                    "#26a69a",
                    "#D10CE8"
                  ],
                  fontSize: "12px"
                }
              }
            }
          };

        } ,

        (error) => {} )
      i++ ;
      startDate = new Date(year,month,i)
    }

  }

  changeCountry(e: any): void {
    this.country = e.target.value;
    this.statisticOfThisMonth(e.target.value)
  }

}
