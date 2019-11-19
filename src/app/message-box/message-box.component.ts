import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {

  dialogTitle: string;
  dialogMessage: string;
  dialogButton: string;
  dialogType: DIALOGTYPE = DIALOGTYPE.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogTitle = data.title;
    this.dialogMessage = data.message;
    this.dialogButton = data.button;
    this.dialogType = data.type;
    console.log(data);
  }

}

export enum DIALOGTYPE {
  INFO = 'info',
  WARN = 'warn'
}

