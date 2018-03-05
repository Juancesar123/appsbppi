import { ComponentsModule } from './../../components/components.module';
import { FooterComponent } from './../../components/footer/footer';
import { FooterPage } from './../footer/footer';
import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListviewtarifPage } from './listviewtarif';
import { PipesModule } from '../../pipes/pipes.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    ListviewtarifPage,
  ],
  imports: [
    IonicPageModule.forChild(ListviewtarifPage),
    PipesModule,
    FooterPageModule,
    ComponentsModule
  ],
})
export class ListviewtarifPageModule {}
