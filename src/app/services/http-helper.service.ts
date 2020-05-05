import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpInterceptorService } from './http-interceptor.service';


@Injectable({providedIn: 'root'})
export class HttpHelper {
    constructor(
        private http: HttpInterceptorService,
        private storage: LocalStorageService){

    }
    token = null;
    url = null;
    public BaseUrl: any = 'http://168.61.211.238:3000/v2/';
    
    getUrl() {
        return this.url;
    }

    setUrl(endpoint): any {
        // this.token = this.storage.retrieve('access_token');
        this.url = this.BaseUrl + endpoint;// + '?access_token=' + this.token;
        return 1;
    }

    get(endpoint: string): Observable<any> {
        this.setUrl(endpoint);
        const headers = new Headers();
        headers.append('X-Content-Type-Options', 'nosniff');
        headers.append('X-Frame-Options', 'SAMEORIGIN');
        const options = new RequestOptions({ headers });
        return this.http.get(this.getUrl(), options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    post(endpoint: string, payload: any): Observable<any> {
        this.setUrl(endpoint);
        const headers = new Headers();
        headers.append('X-Content-Type-Options', 'nosniff');
        headers.append('X-Frame-Options', 'SAMEORIGIN');

        const options = new RequestOptions({ headers });
        return this.http.post(this.getUrl(), payload, options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    put(endpoint: string, payload: any): Observable<any> {
        this.setUrl(endpoint);
        const headers = new Headers();
        headers.append('X-Content-Type-Options', 'nosniff');
        headers.append('X-Frame-Options', 'SAMEORIGIN');

        const options = new RequestOptions({ headers });
        return this.http.put(this.getUrl(), payload, options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }
}