import { SidemenuPage } from './../sidemenu/sidemenu';
import { MyApp } from './../../app/app.component';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
      this.storage.clear().then(()=>{
        this.navCtrl.setRoot(SidemenuPage);
      })
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
