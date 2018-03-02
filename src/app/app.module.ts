import { SidemenuPageModule } from './../pages/sidemenu/sidemenu.module';
import { SearchartikelPageModule } from './../pages/searchartikel/searchartikel.module';
import { TentangkamiPageModule } from './../pages/tentangkami/tentangkami.module';
//import { RelativetimePipe } from './relativetime.pipe';
//import { RelativetimePipe } from './../pipes/relativetime/relativetime';
import { PipesModule } from './../pipes/pipes.module';
import { LogoutPageModule } from './../pages/logout/logout.module';
import { LogoutComponent } from './../components/logout/logout';
import { SetactivityPageModule } from './../pages/setactivity/setactivity.module';
import { LogactivityPageModule } from './../pages/logactivity/logactivity.module';
import { OrganisasiPageModule } from './../pages/organisasi/organisasi.module';
import { FasilitaslabPageModule } from './../pages/fasilitaslab/fasilitaslab.module';
import { HukumperaturanPageModule } from './../pages/hukumperaturan/hukumperaturan.module';
import { InformasilingkunganPageModule } from './../pages/informasilingkungan/informasilingkungan.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { ViewdetailPageModule } from './../pages/viewdetail/viewdetail.module';
import { MapsPageModule } from './../pages/maps/maps.module';
import { NewsPageModule } from './../pages/news/news.module';
import { LoginformPageModule } from './../pages/loginform/loginform.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {OneSignal} from '@ionic-native/onesignal';
//import {HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { ArticleProvider } from '../providers/article/article';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { SetactivityProvider } from '../providers/setactivity/setactivity';
import { InformasilingkunganProvider } from '../providers/informasilingkungan/informasilingkungan';
import { HukumdanperaturanProvider } from '../providers/hukumdanperaturan/hukumdanperaturan';
import { FasilitasdanlabProvider } from '../providers/fasilitasdanlab/fasilitasdanlab';
import { OrganisasiProvider } from '../providers/organisasi/organisasi';
import { RealtimeapiProvider } from '../providers/realtimeapi/realtimeapi';
import { FormPage } from '../pages/areapelanggan/form';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    //RelativetimePipe
    //RelativetimePipe,
    //PipesModule,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    //PipesModule,
    SearchartikelPageModule,
    SidemenuPageModule,
    TentangkamiPageModule,
    LoginformPageModule,
    NewsPageModule,
    RegisterPageModule,
    HttpModule,
    LogoutPageModule,
    ViewdetailPageModule,
    InformasilingkunganPageModule,
    HukumperaturanPageModule,
    FasilitaslabPageModule,
    OrganisasiPageModule,
    LogactivityPageModule,
    SetactivityPageModule,
    MapsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormPage
  ],
  providers: [
    NativeGeocoder,
    OneSignal,
    StatusBar,
    GoogleMaps,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticleProvider,
    AuthenticationProvider,
    SetactivityProvider,
    InformasilingkunganProvider,
    HukumdanperaturanProvider,
    FasilitasdanlabProvider,
    OrganisasiProvider,
    RealtimeapiProvider
  ]
})
export class AppModule {}
