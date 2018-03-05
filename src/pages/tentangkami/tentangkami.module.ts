import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TentangkamiPage } from './tentangkami';

@NgModule({
  declarations: [
    TentangkamiPage,
  ],
  imports: [
    IonicPageModule.forChild(TentangkamiPage),
    ComponentsModule
  ],
})
export class TentangkamiPageModule {}
