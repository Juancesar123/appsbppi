import { prodVariables } from './../../app/production';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
/*
  Generated class for the HukumdanperaturanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HukumdanperaturanProvider {

  constructor(public http: Http) {
    console.log('Hello HukumdanperaturanProvider Provider');
  }
  GetData(){
    return this.http.get(prodVariables.apiEndpoint+'/hukumdanperaturan').map(res => res.json().data);
  }
}
