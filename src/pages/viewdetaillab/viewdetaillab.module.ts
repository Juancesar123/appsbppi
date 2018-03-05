import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewdetaillabPage } from './viewdetaillab';

@NgModule({
  declarations: [
    ViewdetaillabPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewdetaillabPage),
    ComponentsModule
  ],
})
export class ViewdetaillabPageModule {}
