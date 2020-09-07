import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { Observable } from 'rxjs/Observable';
import { Board } from '../models/board.model';
import { Card } from '../models/card.model';
@Injectable()
export class BoardService {
  constructor(private _rest: RestService) { }
  getBoards() {
    return this._rest.executeGet('/boards');
  }
  getBoardDetails(id: string) {
    return this._rest.executeGet(`/boards/${id}`);
  } 
  /* getBoardDetails(id: string) {
    return this._rest.executeGet(/board/${id}).filter((b) => b.id === id)[0];
  } */

  createCard(id: string,idL: string,title:string): Observable<Card>{
    return this._rest.executePost(`/boards/${id}/${idL}`, {title});
  }

  createList(id: string, title: string): Observable<Board> {
    return this._rest.executePost(`/boards/${id}`, {title});
     // .catch(this.handleError)
  }

  /*private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }*/

  createBoard(name: string) {
    return this._rest.executePost('/boards/', { name });
  }
  execDeleteBoard(id: string): void {
    this._rest.deleteBoard(id)
      .subscribe(
        res => {
          console.log('deleted -> ', res);
          this.getBoards();
        },
      );
  }

  
}
