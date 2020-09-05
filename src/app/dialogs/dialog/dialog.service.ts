import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';

@Injectable()
export class DialogService {

  constructor(private _dialog: MatDialog) { }

  openPrompt(title: string, message: string) {
    const dialog = this._dialog.open(PromptDialogComponent, {
      data: { title, message }
    });

    return dialog.beforeClose();
  }

}
