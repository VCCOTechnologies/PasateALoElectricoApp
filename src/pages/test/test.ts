import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  asks;
  current_ask;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asks = navParams.get('test');
    this.current_ask = this.asks[0];
  }

  returnBack() {
      this.navCtrl.pop();
  }
}
