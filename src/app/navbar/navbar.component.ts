import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models/list.model';


import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() childAllLists: List[];
  showForm:boolean;
  constructor(public dialog: MatDialog ) {
    this.showForm = true
   }
   
  toggleAjtDisplay(){
    this.showForm = !this.showForm;
  }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
