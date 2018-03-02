import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { SetactivityProvider } from './../../providers/setactivity/setactivity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setactivity',
  templateUrl: 'setactivity.html',
  providers:[SetactivityProvider]
})
export class SetactivityPage {
  labs:String;
  keterangan:String;
  constructor(public toastctrl:ToastController,public loadctrl:LoadingController,public SetActivityServices:SetactivityProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetactivityPage');
  }
  Save(){
    let messagesuccess = this.toastctrl.create({
      message:"Data Berhasil Disimpan",
      position:"TOP",
      duration:3000
    })
    let messagegagal = this.toastctrl.create({
      message:"Data Gagal Disimpan",
      position:"TOP",
      duration:3000
    })
    let loader = this.loadctrl.create({
      content:'Mohon Tunggu...',
    })
    loader.present();
    let data = {"nama":this.labs,"keterangan":this.keterangan,"status" : "pending"}
    this.SetActivityServices.SaveData(data).subscribe(val =>{
        loader.dismiss();
        messagesuccess.present();
    },err =>{
      loader.dismiss();
      messagegagal.present();
    })

  }
}
