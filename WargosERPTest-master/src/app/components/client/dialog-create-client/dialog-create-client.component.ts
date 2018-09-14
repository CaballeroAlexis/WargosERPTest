import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-create-client',
  templateUrl: './dialog-create-client.component.html',
  styleUrls: ['./dialog-create-client.component.css']
})
export class DialogCreateClientComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogCreateClientComponent>,) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close(true);
}
  close() {
    this.dialogRef.close();
}
}
