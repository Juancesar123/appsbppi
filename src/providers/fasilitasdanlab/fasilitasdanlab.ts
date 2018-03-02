import { prodVariables } from './../../app/production';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
/*
  Generated class for the FasilitasdanlabProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FasilitasdanlabProvider {

  constructor(public http: Http) {
    console.log('Hello FasilitasdanlabProvider Provider');
  }
  GetData(){
    return this.http.get(prodVariables.apiEndpoint+'/fasilitaslab').map(res => res.json().data);
  }
}
