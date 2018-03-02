import { prodVariables } from './../../app/production';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http ,RequestOptions,Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
import { Http ,RequestOptions,Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

  Generated class for the SetactivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetactivityProvider {
  constructor(public http: Http) {
    console.log('Hello SetactivityProvider Provider');
  }
  SaveData(data){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post(prodVariables.apiEndpoint+'/setactivity',body,options);
  }
  GetLogActivity(){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get(prodVariables.apiEndpoint+'/logactivity',options).map(res => res.json().data);
  }
}
