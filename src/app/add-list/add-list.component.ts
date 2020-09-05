import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/list.model';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  showForm:boolean;
  @Output() clickSender = new EventEmitter();

  newList(listToCreate: any)  /*  listeToCreate=formInfo */  {
    const tempItem :List = {
      title : listToCreate.listeTitle,
      cards:[new Card (listToCreate.cards)],
    };
    this.clickSender.emit(tempItem) ;
    this.showForm = !this.showForm ;
  }

  toggleAjtDisplay(){
    this.showForm = !this.showForm; 
  }

  constructor() {
    this.showForm = true;
   }

  ngOnInit() {
  }

}
