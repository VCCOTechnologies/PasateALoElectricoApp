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
    this.navCtrl.push(TestPage);
  }

}
