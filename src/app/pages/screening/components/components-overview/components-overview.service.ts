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
                return response;
            }));
}

  createIndividualScreening(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
    const options = new RequestOptions({ headers });
    return this.http.post(url, payload)
      .pipe(
        map(response => {
          // response.json();
          // return response.json();
          return response;
        }));
  }

  createOrganizationScreening(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;

    const options = new RequestOptions({ headers });
    return this.http.post(url, payload)
        .pipe(
            map(response => {
                // response.json();
                // return response.json();
                return response;
            }));
}

createVesselScreening(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              // response.json();
              // return response.json();
              return response;
          }));
}

createUnspecifiedScreening(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              // response.json();
              // return response.json();
              return response;
          }));
}

createPassportCheck(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              // response.json();
              // return response.json();
              return response;
          }));
}

getCountryList(endpoint: string): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url,{})
      .pipe(
          map(response => {
              let result = Object.keys(response)
             .map(key => ({id: key, name: response[key]}));
             return result;
          }));
}

getSummaries(endpoint: string, payload: any): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.post(url, payload)
      .pipe(
          map(response => {
              // response.json();
              // return response.json();
              return response;
          }));
}

getCaseResult(endpoint: string): Observable<any> {
  const headers = new Headers();
  const url = endpoint;

  const options = new RequestOptions({ headers });
  return this.http.get(url)
      .pipe(
          map(response => {
              // response.json();
              // return response.json();
              return response;
          }));
}

onCaseResolve(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
  
    const options = new RequestOptions({ headers });
    return this.http.put(url, payload)
        .pipe(
            map(response => {
                return response;
            }));
  }

onCaseReview(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
  
    const options = new RequestOptions({ headers });
    return this.http.put(url, payload)
        .pipe(
            map(response => {
                return response;
            }));
  }


  getCaseSummaryData(endpoint: string): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
  
    // const options = new RequestOptions({ headers });
    return this.http.get(url)
        .pipe(
            map(response => {
                // response.json();
                // return response.json();
                return response;
            }));
  }

  getAuditDetailsData(endpoint: string, payload: any): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
  
    const options = new RequestOptions({ headers });
    return this.http.post(url, payload)
        .pipe(
            map(response => {
                // response.json();
                // return response.json();
                return response;
            }));
  }
  getFullDetails(endpoint: string): Observable<any> {
    const headers = new Headers();
    const url = endpoint;
  
    return this.http.get(url)
        .pipe(
            map(response => {
                // response.json();
                // return response.json();
                return response;
            }));
  }

  
}


