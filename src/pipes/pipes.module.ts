import { NgModule } from '@angular/core';
import { RelativetimePipe } from './relativetime/relativetime';
import { ArtikelsearchPipe } from './artikelsearch/artikelsearch';
import { SearchtarifPipe } from './searchtarif/searchtarif';
@NgModule({
	declarations: [RelativetimePipe,
    ArtikelsearchPipe,
    SearchtarifPipe],
	imports: [],
	exports: [RelativetimePipe,
    ArtikelsearchPipe,
    SearchtarifPipe]
})
export class PipesModule {}
