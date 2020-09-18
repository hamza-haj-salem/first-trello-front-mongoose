import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Board } from '../models/board.model';
const serverURL = 'http://localhost:3000';

@Injectable()
export class RestService {
constructor(private _http: Http) { }


executeGet(url: string) {
    return this._http.get(serverURL + url)
    .map(this.extractData)
    .catch(this.handleError)
    ;
} 

executeUpdate(url: string, data: object){
    return this._http.put(serverURL+url, data)
    .map(this.extractData)
    .catch(this.handleError);
    
}

executePost(url: string, data: object) {
    console.log("rest serv "+data)
    return this._http.post(serverURL+url, data)
    .map(this.extractData)
    .catch(this.handleError);
}

deleteCard(id: string, idL:string, idC:string){
    return this._http.delete(serverURL+`/boards/${id}/lists/${idL}/cards/${idC}`)
    .catch(this.handleError);
}

deleteList(id: string, idL:string) {
    return this._http.delete(serverURL+`/boards/${id}/lists/${idL}`)
    .catch(this.handleError);
    
}

deleteBoard(id: string) {
    return this._http.delete(serverURL+`/boards/${id}`)
    .catch(this.handleError);
    
}

extractData(res: Response) {
    return res.json();
}

handleError(error: any) {
    return Observable.throw(error);
}
  
}