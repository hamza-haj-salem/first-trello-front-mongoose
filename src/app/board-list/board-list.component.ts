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

  boardClicked(board) {
    this._router.navigate(['boards', board._id]);
    //this._board.getBoardDetails(board.id);
  }

  createBoard() {
    this._dialog.openPrompt('', '')
      .subscribe((name)=>{
        if(name){
          this._board.createBoard(name).subscribe(()=>this.loadBoards())
        }
      });
  }

  loadBoards() {
    this.boards = this._board.getBoards();
  }
}
