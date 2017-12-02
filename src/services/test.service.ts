import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {
    constructor(
        private http: Http,
    ) {}

    urlBase = "change_me";
    
    getTest() {
        var url = this.urlBase + "/test";
        var headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        return [];
        //TO-DO: uncomment this lines as soon is the server available 
        //var resObservable = this.http.get(url, { headers: headers });
        //return resObservable;
    };
}