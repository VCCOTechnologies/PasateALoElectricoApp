import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {
    constructor(
        private http: Http,
    ) {}

    urlBase = "https://pasatealoelectrico.herokuapp.com/";
    
    getTest() {
        var url = this.urlBase + "preguntas";
        var headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        var resObservable = this.http.get(url, { headers: headers });
        return resObservable;
    };
}