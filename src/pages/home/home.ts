import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestService } from '../../services/test.service';
import { TestPage } from '../test/test';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading;

  constructor(public navCtrl: NavController, private testService: TestService, private alertCtrl: AlertController) {
    this.loading = false;
  }

  startTest() {
    this.loading = true;
    let resObservable = this.testService.getTest();
    let test = [];
    resObservable.subscribe(
        res => {
            this.loading = false;
            this.navCtrl.push(TestPage, {
              test: res.json()
            });
        },
        error => {
            this.loading = false;
        }
    );

  }

}
