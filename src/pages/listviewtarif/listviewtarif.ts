import { ListviewtarifProvider } from './../../providers/listviewtarif/listviewtarif';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListviewtarifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listviewtarif',
  templateUrl: 'listviewtarif.html',
  providers:[ListviewtarifProvider]
})
export class ListviewtarifPage {
  datatarif;
  tarif:String;
  constructor(public listviewtarifServices:ListviewtarifProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getdatatarif();
    this.tarif = this.navParams.get('tarif');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListviewtarifPage');
  }
  getdatatarif(){
    let tarif = this.navParams.get('tarif');
    this.listviewtarifServices.getdata(tarif).subscribe((val) => this.datatarif = val);
  }
}
