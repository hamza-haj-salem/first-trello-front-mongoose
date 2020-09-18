import {Component, OnInit} from '@angular/core';
import { Card } from './models/card.model';
import { List } from './models/list.model';
import {DragulaService} from 'ng2-dragula';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
  constructor(private dragulaService: DragulaService,
              public dialog: MatDialog) {
    dragulaService.createGroup('VAMPIRES', {
      removeOnSpill: false
    });
  }
 
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
