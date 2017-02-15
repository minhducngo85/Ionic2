import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Checkboxes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkboxes',
  templateUrl: 'checkboxes.html'
})
export class CheckboxesPage {

  checkboxItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.checkboxItems = [];
    this.checkboxItems.push({
      id : '0',
      text: 'Daenerys Targaryen',
      checked: false,
      color: 'dark',
      disabled: 'false'
    });
    this.checkboxItems.push({
      id : '1',
      text: 'Arya Stark',
      checked: true,
      color: 'secondary',
      disabled: 'true'
    });
    this.checkboxItems.push({
      id : '2',
      text: 'Arya Stark',
      checked: true,
      color: 'royal',
      disabled: 'false'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxesPage');
  }

  printCheckboxItems() {
    console.log('Checkbox Items:');
    let tempString = "";
    for (let item of this.checkboxItems) {
       tempString += item.text+ ":" + item.checked+ "<br/>";
      
    }
    console.log(tempString);
    let alert = this.alertCtrl.create(
      {
        title: 'Checkbox Items',
        message: tempString,
        buttons: ['Ok']
      }
    );
    alert.present();
  }

  toogleSelection(item) {
    for (let checkbox of this.checkboxItems) {
       if (item.id == checkbox.id) {
          checkbox.checked == 'false' ? checkbox.checked = 'true' : checkbox.checked = 'false';
          break;
       }
    }
  }



}
