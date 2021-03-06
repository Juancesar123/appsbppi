import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prodVariables } from '../../app/production';

/**
 * Generated class for the ViewdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewdetail',
  templateUrl: 'viewdetail.html',
})
export class ViewdetailPage {
  apiendpoint:any = prodVariables.apiEndpoint;
  urlgambar:any = prodVariables.apigambar;
  DataArticle;
  title:String;
  deskripsi:String;
  gambar:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DataArticle = this.navParams.get('data');
    this.title = this.DataArticle.judul;
    this.deskripsi = this.DataArticle.isi;
    this.gambar = this.DataArticle.artikel_file;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewdetailPage');
  }

}
