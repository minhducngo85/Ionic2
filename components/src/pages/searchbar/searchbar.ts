import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Searchbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchbarPage');
  }

  items;

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  filterItems(event) {

     // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    //let val = event.target.value;
    var val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.info(val);
      this.items = this.items.filter(
        (item) => { return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);}
      );
    }
  }

}
