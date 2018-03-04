import { Storage } from '@ionic/storage';
import { NotifikasispkProvider } from './../../providers/notifikasispk/notifikasispk';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotifikasispkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifikasispk',
  templateUrl: 'notifikasispk.html',
})
export class NotifikasispkPage {
  nospk:String;
  datanotifikasi;
  tampilnama;
  tampilspk:String;
  constructor(public storage:Storage,public notifservices:NotifikasispkProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.Getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifikasispkPage');
  }
  Getdata(){
    let userid = this.storage.get('id');
    let nospk = this.navParams.get('nospk');
    this.tampilspk = this.navParams.get('nospk');
    this.notifservices.Getdata(userid,nospk).subscribe((val) =>{
      this.datanotifikasi = val;
      if(val.length < 1){
        this.tampilnama = true;
      }else{
        this.tampilnama = false;
      }
      
    });
  }
}
