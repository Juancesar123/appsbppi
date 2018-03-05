import { ComponentsModule } from './../../components/components.module';
import { FooterComponent } from './../../components/footer/footer';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotifikasispkPage } from './notifikasispk';

@NgModule({
  declarations: [
    NotifikasispkPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifikasispkPage),
    ComponentsModule
  ],
})
export class NotifikasispkPageModule {}
