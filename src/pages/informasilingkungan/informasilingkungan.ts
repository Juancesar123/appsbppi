import { InformasilingkunganProvider } from './../../providers/informasilingkungan/informasilingkungan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformasilingkunganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informasilingkungan',
  templateUrl: 'informasilingkungan.html',
  providers:[InformasilingkunganProvider]
})
export class InformasilingkunganPage {
  Informasilingkungan:String;
  constructor(public InformasiLingkunganService:InformasilingkunganProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.GetDataInformasi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformasilingkunganPage');
  }
  GetDataInformasi(){
    this.InformasiLingkunganService.GetData().subscribe((result) => this.Informasilingkungan = result);
  }

}
