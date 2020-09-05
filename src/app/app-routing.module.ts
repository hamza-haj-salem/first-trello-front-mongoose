import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import {BoardListComponent} from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';




export const routes: Routes = [
  { path: 'boards/:id', component: ListsComponent},
  { path: 'boards', component: BoardListComponent },
  { path: 'nav', component: NavbarComponent },
  { path: '', redirectTo: '/boards', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
