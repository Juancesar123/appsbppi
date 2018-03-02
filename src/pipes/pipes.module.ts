import { NgModule } from '@angular/core';
import { RelativetimePipe } from './relativetime/relativetime';
import { ArtikelsearchPipe } from './artikelsearch/artikelsearch';
@NgModule({
	declarations: [RelativetimePipe,
    ArtikelsearchPipe],
	imports: [],
	exports: [RelativetimePipe,
    ArtikelsearchPipe]
})
export class PipesModule {}
