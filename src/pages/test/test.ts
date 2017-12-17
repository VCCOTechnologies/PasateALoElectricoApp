import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  test;
  currentAsk;
  currentNumAsk;
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public platform: Platform) {
    this.test = navParams.get('test');
    this.currentAsk = this.test[0];
    this.currentNumAsk = 1;
  }

  returnBack() {
      this.navCtrl.pop();
  }

  nextQuestion() {
    if (this.currentNumAsk + 1 <= this.test.length) {
      this.currentNumAsk++;
      this.currentAsk = this.test[this.currentNumAsk-1];
    }
  }

  selectAnswer(answer) {
    this.currentAsk.selected = answer;
  }

  finishTest() {
    let alert = this.alertCtrl.create({
      title: 'Fin del test',
      message: '¿Estás seguro de querer finalizar?',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Finalizar',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  } 

  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event) {
    }, 101); 
  }
}
