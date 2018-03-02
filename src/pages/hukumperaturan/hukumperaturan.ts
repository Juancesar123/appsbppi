import { HukumdanperaturanProvider } from './../../providers/hukumdanperaturan/hukumdanperaturan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HukumperaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hukumperaturan',
  templateUrl: 'hukumperaturan.html',
  providers:[HukumdanperaturanProvider]
})
export class HukumperaturanPage {
  Datahukumdanperaturan:any;
  constructor(public HukumdanPeraturanService:HukumdanperaturanProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.GetDataHukum();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HukumperaturanPage');
  }
  GetDataHukum(){
    this.HukumdanPeraturanService.GetData().subscribe((result) =>this.Datahukumdanperaturan = result);
  }
}
