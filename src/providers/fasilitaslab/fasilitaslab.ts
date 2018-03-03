import { Http } from '@angular/http';
import { prodVariables } from './../../app/production';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

/*
  Generated class for the FasilitaslabProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FasilitaslabProvider {

  constructor(public http: Http) {
    console.log('Hello FasilitaslabProvider Provider');
  }
  getdata(){
    return this.http.get(prodVariables.apiEndpoint +'/laboratorium').map(m => m.json());
  }
}
