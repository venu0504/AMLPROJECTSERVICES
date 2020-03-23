import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class ApiProvider {
    token = null;
    url = null;
    //public BaseUrl: any = 'https://cashsends.com/api/';
    public BaseUrl: any = 'http://168.61.211.238:3000/v2/';
    public gatewayurl: any = 'http://localhost:8080/';
    public coopavanzaurl: any = 'https://cooptavanza.com/fineract-provider/api/v1';
    public coopplus: any = 'https://co-opplus.com/';
    public topup: any = 'http://52.187.107.232/v1';

    constructor(
        public http: HttpInterceptorService,
        private storage: LocalStorageService) {


    }

    setUrl(endpoint): any {
        this.token = this.storage.retrieve('access_token');
        this.url = this.BaseUrl + endpoint + '?access_token=' + this.token;
        return 1;
    }

    setCooptavanzaUrl(endpoint) {
        this.url = this.coopavanzaurl + endpoint;
    }

    setUrlWithoutToken(endpoint) {

        this.url = this.BaseUrl + endpoint;
    }

    setUrlForLunex(endpoint) {
        this.url = this.BaseUrl + endpoint;
    }

    // urlForMoneyConversion(endpoint){
    // // from,to,amount{
    //   // this.url = 'https://api.fixer.io/latest?from='+from+'&to='+to+'&amount='+amount;
    //   this.url = 'https://www.coopwallet.com/' + endpoint;
    // }

    getUrl() {
        return this.url;
    }

    getHeader() {
        this.token = ''; // get token from cookie
        return new Headers().append('Authorization', 'Bearer ' + this.token);
    }

    get(endpoint: string): Observable<any> {
        this.setUrl(endpoint);
        const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.token);

       // headers.append('Strict-Transport-Security', 'maxage=31536000');
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
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.token);
        // headers.append('Strict-Transport-Security', 'maxage=31536000');
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
        // headers.append('Content-Type', 'application/json');
       // headers.append('Authorization', 'Bearer ' + this.token);
       // headers.append('Strict-Transport-Security', 'maxage=31536000');
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



    login(endpoint: string, payload: any): Observable<any> {
        const url = this.BaseUrl + endpoint;
        /*const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa('devglan-client:devglan-secret'));
        const options = new RequestOptions({ headers: headers });
        console.log(options);
        console.log(payload);*/
        const params = new URLSearchParams();
        params.append('username', payload.username);
        params.append('password', payload.password);
        params.append('grant_type', 'password');
        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            Authorization: 'Basic ' + btoa('cashsends-client:welcome')
        });
        const options = new RequestOptions({ headers });
        return this.http.post(url, params.toString(), options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    postWithoutAuth(endpoint: string, payload: any): Observable<any> {
        this.setUrlWithoutToken(endpoint);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
       // headers.append('Strict-Transport-Security', 'maxage=31536000');
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

    getWithoutAuth(endpoint: string): Observable<any> {
        this.setUrlWithoutToken(endpoint);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Strict-Transport-Security', 'maxage=31536000');
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


    postToCooptavanza(endpoint: string, payload: any): Observable<any> {
        this.setCooptavanzaUrl(endpoint);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Fineract-Platform-TenantId', 'default');
        const options = new RequestOptions({ headers });
        return this.http.post(this.getUrl(), payload, options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    postToCooptavanzaWithHeader(endpoint: string, payload: any, token: any): Observable<any> {
        this.setCooptavanzaUrl(endpoint);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Fineract-Platform-TenantId', 'default');
        headers.append('Authorization', 'Basic ' + token + '');
        const options = new RequestOptions({ headers });
        return this.http.post(this.getUrl(), payload, options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    gettToCooptavanzaWithHeader(endpoint: string, token: any): Observable<any> {
        this.setCooptavanzaUrl(endpoint);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Fineract-Platform-TenantId', 'default');
        headers.append('Authorization', 'Basic ' + token + '');
        const options = new RequestOptions({ headers });
        return this.http.get(this.getUrl(), options)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    getConversionApi(url: any) {
        return this.http.get(url)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }

    postCoopplus(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.token);
        const url = this.coopplus + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    posttopup(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.token);
        const url = this.topup + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));

    }

    sendUsernameLink(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

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
        const url = this.BaseUrl + endpoint;

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

    getGroups(endpoint: string): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url,'')
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }
    
    sendPasswordLink(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
        }
    
    register(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }
    
    createOnePass(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }

    createSingleScreening(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }

    createIndividualScreening(endpoint: string, payload: any): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

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
        const url = this.BaseUrl + endpoint;

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
        const url = this.BaseUrl + endpoint;

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
        const url = this.BaseUrl + endpoint;

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
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url, payload)
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }
    
    //UserDetail for summary page
    getUserDetails(endpoint: string): Observable<any> {
        const headers = new Headers();
        const url = this.BaseUrl + endpoint;

        const options = new RequestOptions({ headers });
        return this.http.post(url,{})
            .pipe(
                map(response => {
                    response.json();
                    return response.json();
                }));
    }

}
