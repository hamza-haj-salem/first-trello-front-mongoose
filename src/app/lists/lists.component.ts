import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { List } from '../models/list.model';
import { Card } from '../models/card.model';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../board-list/board.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialogs/dialog/dialog.service';
import { title } from 'process';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
  @Output() clickSender2 = new EventEmitter();
  @Output() clickSender = new EventEmitter();
  showForm:boolean;
  id: string;
  board;
  selectedList =  null ;

  deleteCard(currentList,idC){
    this._board.execDeleteCard(this.id,currentList._id,idC);
    this.loadBoardDetails();
    console.log("id List " + currentList._id);
    console.log("id Card " + idC);

  }

  deleteList(currentList): void {
    this._board.execDeleteList(this.id,currentList._id);
    this.loadBoardDetails();
  }

  loadBoardDetails() {
    this._board.getBoardDetails(this.id).subscribe((data) => this.board = data);    
  }

  createCard(currentList){
    this._dialog.openPrompt('aaaa', 'bbbb')
    .subscribe((title) => {
      if (title) {
        this._list.createCard(this.id, currentList._id, title).subscribe(() => this.loadBoardDetails()); 
      }
    });
  }

  createList() {
    this._dialog.openPrompt('aaaa', 'bbbb')
    .subscribe((title) => {
      if (title) {
        this._list.createList(this.id, title).subscribe(() => this.loadBoardDetails());
      }
    });
  }

  constructor(private _activatedRoute: ActivatedRoute,
    private _board: BoardService,
    private _router: Router,
    private _dialog : DialogService,
    private _list : BoardService,) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
    this.id = params.get('id');
    this.loadBoardDetails();
    });
  }

}
