import { ComponentsModule } from './../../components/components.module';
import { FooterComponent } from './../../components/footer/footer';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    PipesModule,
    ComponentsModule
  ],
})
export class NewsPageModule {}
