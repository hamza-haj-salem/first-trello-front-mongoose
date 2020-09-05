import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models/list.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() childAllLists: List[];
  showForm:boolean;
  constructor() {
    this.showForm = true
   }
  toggleAjtDisplay(){
    this.showForm = !this.showForm;
      
    
  }
  ngOnInit() {
  }

}
