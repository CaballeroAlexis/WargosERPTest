import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http:Http, private http2:HttpClient) { }

getReceipt(){
  return this.http2.get('http://localhost:3000/receipt/').pipe(map(data=>{return data}))
}

  addReceiptWithPromise(receipt:object) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post('http://localhost:3000/receipt/', receipt, options).toPromise()
               .then(this.extractData)
                     .catch(this.handleErrorPromise);
      }	
      deleteReceipt(id:any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
              return this.http.delete('http://localhost:3000/receipt/'+ id);
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
