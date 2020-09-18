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


  addUser(user){
    console.log("board serv" +user);
    return this._rest.executePost("/users/signup", { user });
  }

  createCard(id: string,idL: string,title:string): Observable<Card>{
    return this._rest.executePost(`/boards/${id}/lists/${idL}`, {title});
  }

  createList(id: string, title: string): Observable<Board> {
    return this._rest.executePost(`/boards/${id}`, { title });
     // .catch(this.handleError)
  }

  /*private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }*/

  updateBoard(id:string, name:string){
    return this._rest.executeUpdate(`/boards/${id}`, { name });
  }

  createBoard(name: string) {
    return this._rest.executePost('/boards/', { name });
  }

  execDeleteCard(id: string, idL:string, idC:string){
    this._rest.deleteCard(id,idL,idC)
    .subscribe(
      res => {
        console.log('deleted -> ', res);
        this.getBoardDetails(id);
      },
    );

  }

  execDeleteList(id: string, idL:string): void {
    this._rest.deleteList(id,idL)
      .subscribe(
        res => {
          console.log('deleted -> ', res);
          this.getBoardDetails(id);
        },
      );
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
