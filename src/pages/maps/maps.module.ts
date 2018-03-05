import { ComponentsModule } from './../../components/components.module';
import { FooterComponent } from './../../components/footer/footer';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    ComponentsModule
  ],
})
export class MapsPageModule {}
