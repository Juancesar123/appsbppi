import { Http } from '@angular/http';
import { prodVariables } from './../../app/production';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the NotifikasispkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotifikasispkProvider {

  constructor(public http: Http) {
    console.log('Hello NotifikasispkProvider Provider');
  }
   Getdata(userid,nospk):Observable<any[]>{
     return this.http.get(prodVariables.apiEndpoint + '/notifikasi?no_spk='+nospk).map(m =>m.json());
   }
   getdataempty():Observable<any[]>{
     return this.http.get(prodVariables.apiEndpoint+'/notifikasi?status_kirim=').map(m => m.json());
   }
}
