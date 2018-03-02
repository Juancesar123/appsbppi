import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { MapsPage } from '../maps/maps';
import { prodVariables } from '../../app/production';

/**
 * Generated class for the SearchartikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchartikel',
  templateUrl: 'searchartikel.html',
})
export class SearchartikelPage {
data;
apiendpoint:any = prodVariables.apiEndpoint;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('item')
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchartikelPage');
  }
  viewed(item){
    this.navCtrl.push(ViewdetailPage,{'data':item})
  }
  GotoMaps(item){
    this.navCtrl.push(MapsPage,{"datapeta":item})
  }
}
