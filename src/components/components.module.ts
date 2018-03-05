import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout/logout';
import { FooterComponent } from './footer/footer';
@NgModule({
	declarations: [LogoutComponent,
    FooterComponent],
	imports: [IonicModule],
	exports: [LogoutComponent,
    FooterComponent]
})
export class ComponentsModule {}
