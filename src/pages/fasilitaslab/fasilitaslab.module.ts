import { ComponentsModule } from './../../components/components.module';
import { FooterComponent } from './../../components/footer/footer';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FasilitaslabPage } from './fasilitaslab';

@NgModule({
  declarations: [
    FasilitaslabPage,
  ],
  imports: [
    IonicPageModule.forChild(FasilitaslabPage),
    ComponentsModule
  ],
})
export class FasilitaslabPageModule {}
