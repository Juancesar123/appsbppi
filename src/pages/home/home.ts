import { Storage } from '@ionic/storage';
import { ListviewtarifPage } from './../listviewtarif/listviewtarif';
import { NotifikasispkPage } from './../notifikasispk/notifikasispk';
import { ArticleProvider } from './../../providers/article/article';
import { SearchartikelPage } from './../searchartikel/searchartikel';
import { NewsPage } from './../news/news';
import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';
import { NotifikasispkProvider } from '../../providers/notifikasispk/notifikasispk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ArticleProvider]
})

export class HomePage {
  searchString:String;
  nospk :String;
  tarif:String;
  sessiondata;
  datanotifikasi;
  notifikasi;
  carispk;
  @ViewChild(Searchbar)searchbar:Searchbar;
  ionViewDidEnter() {
    setTimeout(() => {
      //console.log('ca')
      this.searchbar.setFocus();
 });
}
  constructor(public notifikasispk:NotifikasispkProvider,public storage:Storage,public navCtrl: NavController,public articleservice:ArticleProvider) {
    this.storage.get('name').then((val)=>{
      if(val == null){
        this.carispk = true;
        this.notifikasi = false;
      }else{
        this.carispk = false;
        this.notifikasi = true;
      }
    });
    this.getNotifikasi();
  }
  searchByKeyword(){
    let data = this.searchString
    this.navCtrl.push(SearchartikelPage,{'item':data});
  }
  viewprogress(){
    let nospk = this.nospk;
    this.navCtrl.push(NotifikasispkPage,{'nospk':nospk});
  }
  getNotifikasi(){
    this.notifikasispk.getdataempty().subscribe((val)=>{
      this.datanotifikasi = val
    })
  }
  viewtarif(){
    let tarif = this.tarif;
    this.navCtrl.push(ListviewtarifPage,{'tarif':tarif});
  }
}
