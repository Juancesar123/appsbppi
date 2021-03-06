import { ViewdetaillabPage } from './../viewdetaillab/viewdetaillab';
import { FasilitaslabProvider } from './../../providers/fasilitaslab/fasilitaslab';
import { prodVariables } from './../../app/production';
import { FasilitasdanlabProvider } from './../../providers/fasilitasdanlab/fasilitasdanlab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FasilitaslabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fasilitaslab',
  templateUrl: 'fasilitaslab.html',
  providers:[FasilitasdanlabProvider]
})
export class FasilitaslabPage {
  urlgambar:any = prodVariables.apigambar;
  Datafasilitaslab:any;
  apiendpoint:any = prodVariables.apiEndpoint;
  constructor(public FasilitaslabService:FasilitaslabProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.GetData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FasilitaslabPage');
  }
  GetData(){
    return this.FasilitaslabService.getdata().subscribe((result)=>this.Datafasilitaslab = result);
  }
  viewed(item){
    this.navCtrl.push(ViewdetaillabPage,{'item':item})
  }
}
