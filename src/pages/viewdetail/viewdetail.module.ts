import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewdetailPage } from './viewdetail';

@NgModule({
  declarations: [
    ViewdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewdetailPage),
    ComponentsModule
  ],
})
export class ViewdetailPageModule {}
