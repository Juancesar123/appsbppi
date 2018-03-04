import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { SidemenuPage } from './../sidemenu/sidemenu';
import { MyApp } from './../../app/app.component';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
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

  constructor(public auth:AuthenticationProvider,public events:Events,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.events.publish('logout');
    this.storage.get('id').then((val) => {
      let playerid = '';
      this.auth.updateplayer(playerid,val).subscribe((val) =>{
        this.storage.clear().then(()=>{
          this.navCtrl.setRoot(SidemenuPage);
        })
      });
    });
      
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
