import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts';
import set = Reflect.set;
import {Covid19Service} from "../services/covid-19.service";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public chartOptions:  Partial<ChartOptions>  | any ;
  public chartOptions2: Partial<ChartOptions>  | any ;
  public chartOptions3: Partial<ChartOptions>  | any ;
  public chartOptions4: Partial<ChartOptions>  | any ;
  public chartOptions5: Partial<ChartOptions>  | any ;
  public chartOptions6: Partial<ChartOptions>  | any ;

  constructor(private service: Covid19Service) {}


  ngOnInit(): void {

    this.service.getStatistics().subscribe(
      (response: any[]) => {
        const data: number[] = [] ;
        const country: string[] = [];
        response.sort((a, b) => a.cases.active - b.cases.active );
        response.map( (e , index)  => {
          data.push(e.cases.active)
          country.push(e.country)
        }) ;
          this.chartOptions = {
            series: [
              {
                name: "Case",
                data: data.slice(0,40)
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
              categories: country.slice(0,40),
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
          this.chartOptions2 = {
          series: [
            {
              name: "Case",
              data: data.slice(40,80)
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
            show: false
          },
          xaxis: {
            categories: country.slice(40,80),
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
          this.chartOptions3 = {
          series: [
            {
              name: "Case",
              data: data.slice(80,120)
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
            show: false
          },
          xaxis: {
            categories: country.slice(80,120),
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
          this.chartOptions4 = {
          series: [
            {
              name: "Case",
              data: data.slice(120,160)
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
            show: false
          },
          xaxis: {
            categories: country.slice(120,160),
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
          this.chartOptions5 = {
          series: [
            {
              name: "Case",
              data: data.slice(160, 200)
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
            show: false
          },
          xaxis: {
            categories: country.slice(160,200),
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
         this.chartOptions6 = {
          series: [
            {
              name: "Case",
              data: data.slice(200, 238)
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
            show: false
          },
          xaxis: {
            categories: country.slice(200,238),
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
          } , () => {}) ;

  }

}

