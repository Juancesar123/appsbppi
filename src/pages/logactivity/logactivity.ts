import { SetactivityProvider } from './../../providers/setactivity/setactivity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logactivity',
  templateUrl: 'logactivity.html',
  providers:[SetactivityProvider]
})
export class LogactivityPage {
  DataLog;
  constructor(public LogService :SetactivityProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.GetLogActivity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogactivityPage');
  }
  GetLogActivity(){
    this.LogService.GetLogActivity().subscribe((result) => this.DataLog = result);
  }

}
