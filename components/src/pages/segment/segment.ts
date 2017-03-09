import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the Segment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html'
})
export class SegmentPage {

   pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
