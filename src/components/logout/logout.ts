import { HomePage } from './../../pages/home/home';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  text: string;

  constructor(public navctrl:NavController) {
    console.log('Hello LogoutComponent Component');
    this.text = 'Hello World';
    localStorage.clear();
    this.navctrl.setRoot(HomePage);
  }

}
