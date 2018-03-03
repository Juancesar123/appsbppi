import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prodVariables } from '../../app/production';

/**
 * Generated class for the ViewdetaillabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewdetaillab',
  templateUrl: 'viewdetaillab.html',
})
export class ViewdetaillabPage {
data;
namalab;
isi;
gambar;
urlgambar:any = prodVariables.apigambar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('item');
    this.namalab = this.data.namalab;
    this.isi = this.data.isi;
    this.gambar = this.data.laboratorium_file;
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewdetaillabPage');
  }

}
