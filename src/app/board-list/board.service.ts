import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
@Injectable()
export class BoardService {
  constructor(private _rest: RestService) { }
  getBoards() {
    return this._rest.executeGet('/boards');
  }
   getBoardDetails(id: string) {
    return this._rest.executeGet('/boards/${id}');
  } 
  /* getBoardDetails(id: string) {
    return this._rest.executeGet(/board/${id}).filter((b) => b.id === id)[0];
  } */
  createBoard(name: string) {
    return this._rest.executePost('/boards/', { name });
  }

  
}
