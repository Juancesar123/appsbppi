import { SidemenuPage } from './../sidemenu/sidemenu';
import { HomePage } from './../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { SHARED_FORM_DIRECTIVES } from '@angular/forms/src/directives';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';

/**
 * Generated class for the LoginformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginform',
  templateUrl: 'loginform.html',
  providers:[AuthenticationProvider]
})
export class LoginformPage {
  username:string;
  password:String;
  data;
  constructor(public one:OneSignal,public event:Events,public storage:Storage,public loading:LoadingController,public toastmessage:ToastController ,public navCtrl: NavController, public navParams: NavParams, public AuthService:AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginformPage');
  }
  Registered(){
    this.navCtrl.push(RegisterPage);
  }
  Login(){
    let messagesuccess = this.toastmessage.create({
      message:'Error Please Check Your Username and Passowrd',
      position:"bottom",
      duration:3000
      
    })
    let loading = this.loading.create({
      content:'Mohon Tunggu.....'
    });
    loading.present()
    let data = {"email":this.username,"password":this.password,"strategy":'local'};
    this.AuthService.ProAuth(data).subscribe(val =>{
      localStorage.setItem('token',val.accessToken);
      //this.storage.set('token',val.accessToken);
      this.AuthService.getuserdetail(data).subscribe(value =>{
        loading.dismiss()
        value.forEach(element => {
          this.one.getIds().then((val)=>{
            let playerid = val.userId;
            let id = element.id;
            this.AuthService.updateplayer(playerid,id).subscribe(()=>{})
              let six = val.userId
            })
          this.storage.set('id',element.id);
          this.storage.set('name',element.fullname).then(() =>{
            this.event.publish('login');
            this.navCtrl.setRoot(SidemenuPage)
            .then(() =>{
              this.navCtrl.popToRoot();
              //....
          });
          })
          ///localStorage.setItem('email',element.email);
        });
       // this.data = localStorage.getItem('email')
      })
      
    },err =>{
      loading.dismiss()
      messagesuccess.present();
    })
  }
  home(){
    this.navCtrl.setRoot(SidemenuPage)
  }
}
