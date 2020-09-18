import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from './board.service';
import {DialogService} from '../dialogs/dialog/dialog.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards;
  
  constructor(private _router: Router, 
    private _board: BoardService, 
    private _dialog: DialogService) { }

  ngOnInit() {
    this.boards = this._board.getBoards();
    //this.loadBoards();  
  }

  deleteBoard(board): void {
    this._board.execDeleteBoard(board._id);
    this._router.navigate(['boards']);
    this.loadBoards();
  }

  boardClicked(board) {
    this._router.navigate(['boards', board._id]);
    //this._board.getBoardDetails(board.id);
    //this.updateBoard(board);
  }

  createBoard() {
    this._dialog.openPrompt('', '')
      .subscribe((name)=>{
        if(name){
          this._board.createBoard(name).subscribe(()=>this.loadBoards())
        }
      });
  }

  updateBoard(board){
    this._dialog.openPrompt('aaa', 'bbb')
      .subscribe((name)=>{
        if(name){
          this._board.updateBoard(board._id, name).subscribe(()=>this.loadBoards())
        }
      });
  }

  loadBoards() {
    this.boards = this._board.getBoards();
  }
}
