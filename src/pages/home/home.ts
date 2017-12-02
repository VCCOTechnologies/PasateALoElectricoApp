import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startTest() {

    /* TODO: uncomment this code as soon as the server is available
    let resObservable = this.testService.getTest();
    let test = [];
    resObservable.subscribe(
        res => {
            test = res.json();
        },
        error => {
            //TODO: handle error
        }
    );*/

    setTimeout(() => { // Server call mock
      let test = [
        {
          title: 'Pregunta 1',
          description: 'Descripcion pregunta 1'
        },
        {
          title: 'Pregunta 2',
          description: 'Descripcion pregunta 2'
        }
      ];
      this.navCtrl.push(TestPage, {
        test: test
      });
    }, 3000);

  }

}
