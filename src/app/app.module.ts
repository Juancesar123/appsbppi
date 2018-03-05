import { ComponentsModule } from './../components/components.module';
import { FooterPageModule } from './../pages/footer/footer.module';
import { ListviewtarifPageModule } from './../pages/listviewtarif/listviewtarif.module';
import { NotifikasispkPageModule } from './../pages/notifikasispk/notifikasispk.module';
import { ViewdetaillabPageModule } from './../pages/viewdetaillab/viewdetaillab.module';
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
import { FasilitaslabProvider } from '../providers/fasilitaslab/fasilitaslab';
import { NotifikasispkProvider } from '../providers/notifikasispk/notifikasispk';
import { ListviewtarifProvider } from '../providers/listviewtarif/listviewtarif';
import { FooterPage } from '../pages/footer/footer';
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
    NotifikasispkPageModule,
    ListviewtarifPageModule,
    ComponentsModule,
    //PipesModule,
    SearchartikelPageModule,
    SidemenuPageModule,
    ViewdetaillabPageModule,
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
    RealtimeapiProvider,
    FasilitaslabProvider,
    NotifikasispkProvider,
    ListviewtarifProvider
  ]
})
export class AppModule {}
