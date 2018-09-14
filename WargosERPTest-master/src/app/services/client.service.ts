import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor(private http:Http,private http2:HttpClient) { }

  getClient(){
    
    return this.http2.get('http://localhost:3000/client/').pipe(map(data=>{return data}));


  }

  updateClient(id,client) {
    return this.http.put('http://localhost:3000/client/' + id,client)
                .toPromise()
                .then(res => <any[]> res.json().data)
                .then(data => { return data; });
}
  deleteClient(id) {
  return this.http.delete('http://localhost:3000/client/' + id)
              .toPromise()
              .then(res => <any[]> res.json().data)
              .then(data => { return data; });
}

  addClientWithPromise(client:object): Promise<object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post('http://localhost:3000/client/', client, options).toPromise()
               .then(this.extractData)
                     .catch(this.handleErrorPromise);
      }		
  private extractData(res: Response) {
    let body = res.json();
          return body || {};
      }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }	
}
