import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  showFormCard: boolean ;
  @Input() childCurrentProjects: Card[];
  @Output() clickSender2 = new EventEmitter();

  
  toggleCardDisplay(){
    this.showFormCard = !this.showFormCard; 

  }
 

  newCard(cardTitleToCreate:any){ 
    const tempItem: Card = {
      title: cardTitleToCreate.cardName,     
    };
    this.clickSender2.emit(tempItem) ;
    this.showFormCard = !this.showFormCard ;
  }
  constructor() {
    this.showFormCard = true
   

   }
}
