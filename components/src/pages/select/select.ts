import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Select page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select',
  templateUrl: 'select.html'
})
export class SelectPage {
  gamin: string = "n64";
  gender: string = "f";
  os: string;
  toppings : ["bacon", "xcheese"];
  music: string;
  musicAlertOpts: { title: string, subTitle: string };
  month: string;
  year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

}
