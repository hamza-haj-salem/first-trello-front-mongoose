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

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

import { MatDialogModule } from '@angular/material/dialog';


import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListsComponent,
    DescriptionComponent,
    BoardListComponent,
    NavbarComponent,
    AddListComponent,
    LoginComponent
    
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
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule

   
   

  ],
  
  providers: [ BoardService,RestService ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class AppModule { }
