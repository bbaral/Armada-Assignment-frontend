import { Injectable } from '@angular/core';
import {MessageBoxComponent} from "../message-box/message-box.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Injectable()
export class MessageBoxService {

  constructor(private dialog: MatDialog) {}

  openDialog(type: string, title: string, message: string, button: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      type: type,
      title: title,
      message: message,
      button: button
    };
    dialogConfig.minWidth = 300;
    const dialogRef = this.dialog.open(MessageBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        return true;
      } else {
        return false;
      }
    });
  }
}
