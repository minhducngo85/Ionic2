import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the Loading page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtr: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  presentLoading() {
    let loader = this.loadingCtr.create(
      {
        content: "Please wait",
        duration: 3000
      }
    );
    loader.present();
  }

}
