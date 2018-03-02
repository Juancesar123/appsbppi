import { ArticleProvider } from './../../providers/article/article';
import { SearchartikelPage } from './../searchartikel/searchartikel';
import { NewsPage } from './../news/news';
import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ArticleProvider]
})

export class HomePage {
  searchString:String;
  @ViewChild(Searchbar)searchbar:Searchbar;
  ionViewDidEnter() {
    setTimeout(() => {
      //console.log('ca')
      this.searchbar.setFocus();
 });
}
  constructor(public navCtrl: NavController,public articleservice:ArticleProvider) {

  }
  searchByKeyword(){
    let data = this.searchString
    this.articleservice.searchartikel(data).subscribe(val =>{
      this.navCtrl.push(SearchartikelPage,{'item':val});
    })
  }
}
