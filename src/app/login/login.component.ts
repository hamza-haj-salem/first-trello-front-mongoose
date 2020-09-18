import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { RestService } from '../rest/rest.service';
import { BoardService } from '../board-list/board.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username: '', password: '', remember: false};
  constructor(public dialogRef: MatDialogRef<LoginComponent>,
                      private _rest: RestService,
                      private _board: BoardService,) { }

  ngOnInit() {
  }

  onSubmit(user) {
    console.log(' login ts User: '+user );
    //return this._rest.executePost('/users/signup', {user});
    this._board.addUser(user);
  }

 
}
