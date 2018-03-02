import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { TentangkamiPage } from '../tentangkami/tentangkami';
import { NewsPage } from '../news/news';
import { FasilitaslabPage } from '../fasilitaslab/fasilitaslab';
import { OrganisasiPage } from '../organisasi/organisasi';
import { LoginformPage } from '../loginform/loginform';
import { LogoutPage } from '../logout/logout';

/**
 * Generated class for the SidemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages:any;
  datauser;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
      this.pages = [
            { title:'Beranda BBPK', component: HomePage,icon: 'home'},
            { title:'Tentang Kami', component:TentangkamiPage,icon:'ios-people'},
            { title:'Artikel', component:NewsPage,icon:'book'},
            { title:'Fasilitas Lab', component:FasilitaslabPage,icon:'medkit'},
            { title:'Organisasi', component:OrganisasiPage,icon:'speedometer'},
          ];
            storage.get('email').then((val) => {
              this.datauser = val;
              if(val==null){
                console.log('kuppret');
                this.pages.push({ title:'Masuk', component:LoginformPage,icon:'key'})
                console.log(this.pages);
              }else{
                console.log('kampret');
                this.pages.push({ title:'Keluar', component:LogoutPage,icon:'power'})
                console.log(this.pages);
              }
            });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  ionViewDidLoad() {
    
  }

}
