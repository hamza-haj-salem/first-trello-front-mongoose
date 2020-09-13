import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,],
  exports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,]
})
export class MaterialDesignModule { }
