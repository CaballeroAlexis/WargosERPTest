import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-delete-client',
  templateUrl: './dialog-delete-client.component.html',
  styleUrls: ['./dialog-delete-client.component.css']
})
export class DialogDeleteClientComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogDeleteClientComponent>) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close(true);
}
  close() {
    this.dialogRef.close();
}
}
