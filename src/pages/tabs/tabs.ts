import { Component } from '@angular/core';

import { Menu } from '../menu/menu';
import { Order } from '../order/order';
import { Report } from '../report/report';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Menu;
  tab2Root: any = Order;
  tab3Root: any = Report;

  constructor() {

  }
}

