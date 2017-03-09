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
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { LoadingPage } from '../pages/loading/loading';
import { ModalsPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationdetailsPage } from '../pages/navigationdetails/navigationdetails';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverContentPage } from '../pages/popover/popover';
import { RadiosPage } from '../pages/radios/radios';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';

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
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationdetailsPage,
    PopoverPage,
    PopoverContentPage,
    RadiosPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage
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
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationdetailsPage,
    PopoverPage,
    PopoverContentPage,
    RadiosPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
