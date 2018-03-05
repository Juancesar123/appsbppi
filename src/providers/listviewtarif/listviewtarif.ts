import { Observable } from 'rxjs/Observable';
import { prodVariables } from './../../app/production';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
/*
  Generated class for the ListviewtarifProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListviewtarifProvider {

  constructor(public http: Http) {
    console.log('Hello ListviewtarifProvider Provider');
  }
  getdata():Observable<any[]>{
    return this.http.get(prodVariables.apiEndpoint+'/tabletarifcheck').map(m => m.json());
  }
}
