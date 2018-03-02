import { SidemenuPage } from './../pages/sidemenu/sidemenu';
import { TentangkamiPage } from './../pages/tentangkami/tentangkami';
import { LogoutPage } from './../pages/logout/logout';
import { LogoutComponent } from './../components/logout/logout';
import { SetactivityPage } from './../pages/setactivity/setactivity';
import { LogactivityPage } from './../pages/logactivity/logactivity';
import { OrganisasiPage } from './../pages/organisasi/organisasi';
import { FasilitaslabPage } from './../pages/fasilitaslab/fasilitaslab';
import { HukumperaturanPage } from './../pages/hukumperaturan/hukumperaturan';
import { InformasilingkunganPage } from './../pages/informasilingkungan/informasilingkungan';
import { NewsPage } from './../pages/news/news';
import { LoginformPage } from './../pages/loginform/loginform';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/areapelanggan/form';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SidemenuPage;
 constructor(public storage:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
      window["plugins"].OneSignal
        .startInit("9dc10aa8-2b34-461a-bd95-b69dc3bb0726", "86818748220")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
  }
}
