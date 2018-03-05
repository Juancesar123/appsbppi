import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchartikelPage } from './searchartikel';

@NgModule({
  declarations: [
    SearchartikelPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchartikelPage),
    PipesModule,
  ],
})
export class SearchartikelPageModule {}
