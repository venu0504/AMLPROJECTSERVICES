import { HttpHelper } from 'src/app/services/http-helper.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class ComponentsOverviewSVC {
  constructor(private http: HttpHelper) {
  }

  getGroups(endpoint: string): Observable<any> {
    const headers = new Headers();
    const url = endpoint;

    const options = new RequestOptions({ headers });
    return this.http.post(url,'')
        .pipe(
            map(response => {
                response.json();
                return response.json();
            }));
}

  createIndividualScreening(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
    const options = new RequestOptions({ headers });
    return this.http.post(url, payload)
      .pipe(
        map(response => {
          response.json();
          return response.json();
        }));
  }

  createOrganizationScreening(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;

    const options = new RequestOptions({ headers });
    return this.http.post(url, payload)
        .pipe(
            map(response => {
                response.json();
                return response.json();
            }));
}

createVesselScreening(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              response.json();
              return response.json();
          }));
}

createUnspecifiedScreening(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              response.json();
              return response.json();
          }));
}

createPassportCheck(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              response.json();
              return response.json();
          }));
}

getCountryList(endpoint: string): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url,{})
      .pipe(
          map(response => {
              let res = response.json();
              let result = Object.keys(res)
             .map(key => ({id: key, name: res[key]}));
             return result;
          }));
}

}