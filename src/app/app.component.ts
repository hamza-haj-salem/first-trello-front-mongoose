import {Component, OnInit} from '@angular/core';
import { Card } from './models/card.model';
import { List } from './models/list.model';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('VAMPIRES', {
      removeOnSpill: false
    });
  }
 
}
