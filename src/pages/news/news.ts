import { Observable } from 'rxjs/Observable';
import { RealtimeapiProvider } from './../../providers/realtimeapi/realtimeapi';
import { PipesModule } from './../../pipes/pipes.module';
import { prodVariables } from './../../app/production';
import { ArticleProvider } from './../../providers/article/article';
import { ViewdetailPage } from './../viewdetail/viewdetail';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/timeout';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
import { MapsPage } from './../maps/maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import 'rxjs';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;
  searchQuery: string = '';
  NewsData:Observable<any[]>;
  items;
  apiendpoint:any = prodVariables.apiEndpoint;
  urlgambar:any = prodVariables.apigambar;
  constructor(public ToastMessage:ToastController,public navCtrl: NavController, public navParams: NavParams, public ArticleService:ArticleProvider) {
    this.GetDataArticle();
   // this.initializeItems();
  }
  
  GotoMaps(item){
    this.navCtrl.push(MapsPage,{"datapeta":item})
  }
  // initializeItems() {
  //   return this.ArticleService.GetData().subscribe((result) => this.items = result);
  // }
  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.GetDataArticle();

  //   // set val to the value of the searchbar
  //   let val = ev.target.value;
  //   //console.log(this.NewsData);
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.NewsData = this.NewsData.filter((item) => {
  //      // console.log(item.judul);
  //        return (item.toString().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  viewed(item){
    this.navCtrl.push(ViewdetailPage,{'data':item})
  }
  GetDataArticle(){
    this.NewsData = this.ArticleService.messages$()
    // our data is paginated, so map to .data
    .map(m => m)
    // reverse the messages array, to have the most recent message at the end
    // necessary because we get a descendingly sorted array from the data service
    .map(m => m.reverse());
    let MessageError = this.ToastMessage.create({
      message:'Network Error, Connect your internet',
      position:'bottom',
      duration:3000
    });
    // this.ArticleService.GetData().timeout(3000).subscribe((hasil)=>{
    //   this.NewsData = hasil
    // },(err)=>{
    //   MessageError.present();
    // });
  }
}
