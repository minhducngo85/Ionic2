import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgePage } from '../pages/badge/badge';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxesPage } from '../pages/checkboxes/checkboxes';
import { DatetimePage } from '../pages/datetime/datetime';
import { FABsPage } from '../pages/fa-bs/fa-bs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { LoadingPage } from '../pages/loading/loading';
import { ModalsPage } from '../pages/modals/modals';
import { NavigationPage } from '../pages/navigation/navigation';
import { PopoverPage } from '../pages/popover/popover';
import { RadiosPage } from '../pages/radios/radios';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Action Sheets', component: ActionSheetsPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Badge', component: BadgePage },
      { title: 'Buttons', component: ButtonsPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Checkbox', component: CheckboxesPage },
      { title: 'Datetime', component: DatetimePage },
      { title: 'FABs', component: FABsPage },
      { title: 'Gestures', component: GesturesPage },
      { title: 'Grid', component: GridPage },
      { title: 'Icon', component: IconsPage },
      { title: 'Inputs', component: InputsPage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Modal', component: ModalsPage },
      { title: 'Navigation', component: NavigationPage },
      { title: 'Popover', component: PopoverPage },
      { title: 'Radio', component: RadiosPage },
      { title: 'Range', component: RangePage },
      { title: 'Searchbar', component: SearchbarPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Select', component: SelectPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
