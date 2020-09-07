import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { DescriptionComponent } from './description/description.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

import {DragulaModule, DragulaService } from 'ng2-dragula';
import {BoardListComponent} from './board-list/board-list.component';
import {MaterialDesignModule} from './material-design/material-design.module';
import {BoardService} from './board-list/board.service';
import {DialogService} from './dialogs/dialog/dialog.service';
import {DialogsModule} from './dialogs/dialogs.module';
import { NavbarComponent } from './navbar/navbar.component';



import { FormsModule} from '@angular/forms';
import { AddListComponent } from './add-list/add-list.component';
import { RestService } from './rest/rest.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListsComponent,
    DescriptionComponent,
    BoardListComponent,
    NavbarComponent,
    AddListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DragulaModule.forRoot(),
    MaterialDesignModule,
    DialogsModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
   

  ],
  
  providers: [ BoardService,RestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
