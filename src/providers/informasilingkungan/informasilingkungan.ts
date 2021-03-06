import { prodVariables } from './../../app/production';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
/*
  Generated class for the InformasilingkunganProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InformasilingkunganProvider {

  constructor(public http: Http) {
    console.log('Hello InformasilingkunganProvider Provider');
  }
  GetData(){
      return this.http.get(prodVariables.apiEndpoint+'/tentanglingkungan').map(res => res.json().data);
  }
}
