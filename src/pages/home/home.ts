import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestService } from '../../services/test.service';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private testService: TestService) {

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
      let test = this.testService.getTest();
      this.navCtrl.push(TestPage, {
        test: test
      });
    }, 10);

  }

}
