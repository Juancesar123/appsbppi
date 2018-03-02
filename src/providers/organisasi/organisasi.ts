import { prodVariables } from './../../app/production';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
/*
  Generated class for the OrganisasiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrganisasiProvider {

  constructor(public http: Http) {
    console.log('Hello OrganisasiProvider Provider');
  }
  GetData(){
     return this.http.get(prodVariables.apiEndpoint+'/organisasi').map(res => res.json());
  }
}
