import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) { }

  ngOnInit() {
  }

}
