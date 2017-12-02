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
        return  [
            {
                title: 'Pregunta 1',
                description: 'Descripcion pregunta 1',
                answers: ["Si1", "No1", "Quizás"]
            },
            {
                title: 'Pregunta 2',
                description: 'Descripcion pregunta 2',
                answers: ["Si ostias", "No ostias"]
            },
            {
                title: 'Pregunta 3',
                description: 'Descripcion pregunta 3',
                answers: ["Si3", "No3", "Quiza3"]
            },
            {
                title: 'Pregunta 4',
                description: 'Descripcion pregunta 4',
                answers: ["Si4", "No4", "Quiza4"]
            },
            {
                title: 'Pregunta 5',
                description: 'Descripcion pregunta 5',
                answers: ["Si5", "No5", "Quiza5"]
            }
        ];
        //TO-DO: uncomment this lines as soon is the server available 
        //var resObservable = this.http.get(url, { headers: headers });
        //return resObservable;
    };
}