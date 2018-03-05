import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganisasiPage } from './organisasi';

@NgModule({
  declarations: [
    OrganisasiPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganisasiPage),
    ComponentsModule
  ],
})
export class OrganisasiPageModule {}
