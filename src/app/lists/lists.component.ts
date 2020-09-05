import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { List } from '../models/list.model';
import { Card } from '../models/card.model';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../board-list/board.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
 // @Input() childAllLists: List[];
  @Output() clickSender2 = new EventEmitter();
  @Output() clickSender = new EventEmitter();
  showForm:boolean;
  id: string;
  board;
  selectedList =  null ;

  addCards(newCard: Card,currentList:List) {
    //console.log(newCard);
    //this.board.lists.cards.unshift(newCard);
    currentList.cards.push(newCard);
      
  }

  addList(newList : List) {
    this.board.lists.unshift(newList);
    console.log(newList.title,newList.cards);
  }
  constructor(private _activatedRoute: ActivatedRoute, private _board: BoardService) {
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.board = this._board.getBoardDetails(this.id);
    });
  }
}
