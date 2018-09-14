import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-dialog-edit-client',
  templateUrl: './dialog-edit-client.component.html',
  styleUrls: ['./dialog-edit-client.component.css']
})
export class DialogEditClientComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogEditClientComponent>) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close(true);
}
  close() {
    this.dialogRef.close();
}
}
