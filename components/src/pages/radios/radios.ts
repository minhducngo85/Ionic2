import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/*
  Generated class for the Radios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-radios',
  templateUrl: 'radios.html'
})
export class RadiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl({ value: 'rust', disabled: false })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadiosPage');
  }

  langs;
  langForm;

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
