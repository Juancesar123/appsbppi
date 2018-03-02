import { RealtimeapiProvider } from './../realtimeapi/realtimeapi';
import { prodVariables } from './../../app/production';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';
/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleProvider {

  constructor(public feathers:RealtimeapiProvider,public http: Http) {
    console.log('Hello ArticleProvider Provider');
  }
  GetData():Observable<any[]>{
    return this.http.get(prodVariables.apiEndpoint+'/artikel').map(res => res.json());
  }
  messages$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return this.feathers
      .service('artikel')
      .watch()
      .find();
  }
  searchartikel(data):Observable<any[]>{
    return this.http.get(prodVariables.apiEndpoint+'/artikel?judul='+data).map(res => res.json());
  }
  // return this.feathers
  // .service('artikel')
  // .watch()
  // .find({
  //   query: {
  //     $sort: {createdAt: -1},
  //     $limit: 25
  //   }
  // });
}
