import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class Report {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Report Page');
  }

}
