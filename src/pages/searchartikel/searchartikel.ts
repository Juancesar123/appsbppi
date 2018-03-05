import { ArticleProvider } from './../../providers/article/article';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { MapsPage } from '../maps/maps';
import { prodVariables } from '../../app/production';
import { query } from '@angular/core/src/animation/dsl';

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
  providers:[ArticleProvider]
})
export class SearchartikelPage {
data;
querystring:String;
apiendpoint:any = prodVariables.apiEndpoint;
urlgambar:any = prodVariables.apigambar;
  constructor(public article:ArticleProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.querystring = this.navParams.get('item')
    this.getData();
    console.log(this.querystring)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchartikelPage');
  }
  viewed(item){
    this.navCtrl.push(ViewdetailPage,{'data':item})
  }
  getData(){
    this.article.GetData().subscribe((val)=> this.data = val)
  }
  GotoMaps(item){
    this.navCtrl.push(MapsPage,{"datapeta":item})
  }
}
