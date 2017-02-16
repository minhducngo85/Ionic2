import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgePage } from '../pages/badge/badge';
import { ButtonsPage} from '../pages/buttons/buttons';
import { CardsPage} from '../pages/cards/cards';
import { CheckboxesPage } from '../pages/checkboxes/checkboxes';
import { DatetimePage } from '../pages/datetime/datetime';
import { FABsPage } from '../pages/fa-bs/fa-bs';
import { GesturesPage } from '../pages/gestures/gestures';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ActionSheetsPage,
    AlertsPage,
    BadgePage,
    ButtonsPage,
    CardsPage,
    CheckboxesPage,
    DatetimePage,
    FABsPage,
    GesturesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ActionSheetsPage,
    AlertsPage,
    BadgePage,
    ButtonsPage,
    CardsPage,
    CheckboxesPage,
    DatetimePage,
    FABsPage,
    GesturesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
