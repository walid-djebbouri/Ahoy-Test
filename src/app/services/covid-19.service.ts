import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})

export class Covid19Service {
  constructor(private http: HttpClient) {
  }

  public getCountries(): Observable<any> {
    return this.http.get(
      'https://covid-193.p.rapidapi.com/countries',
    ).pipe(
      map( (countries: any) => countries  )
    );
  }

  public getStatistics(): Observable<any> {
    return this.http.get(
      'https://covid-193.p.rapidapi.com/statistics',)
      .pipe(
        map((statistics: any) => statistics.response )
    );
  }

  public getHistory(country: string, day: string): Observable<any> {
    return this.http.get(
      'https://covid-193.p.rapidapi.com/history',
      {
        params: {
          country: country,
          day: day
        }
      }
    ).pipe(
      map( (His) => His )
    );
  }

}
