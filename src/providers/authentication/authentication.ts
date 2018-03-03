//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prodVariables } from './../../app/production';
import { Http ,RequestOptions,Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
  }
  ProAuth(data){
    return this.http.post(prodVariables.apiEndpoint+'/authentication',data).map(res => res.json());;
  }
  getuserdetail(data):Observable<any[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get(prodVariables.apiEndpoint+'/users?email='+data.email,options).map(res => res.json().data);
  }
  updateplayer(playerid,id){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.patch(prodVariables.apiEndpoint+'/users/'+id,{"playerid":playerid},options).map(res => res.json().data);
  
  }
}
