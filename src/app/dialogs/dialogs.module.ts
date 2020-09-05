import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog/dialog.service';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  declarations: [PromptDialogComponent],
  entryComponents: [PromptDialogComponent],
  providers: [DialogService]
})
export class DialogsModule { }
