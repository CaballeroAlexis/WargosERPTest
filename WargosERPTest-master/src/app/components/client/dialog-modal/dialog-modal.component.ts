import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogCreateClientComponent } from './../dialog-create-client/dialog-create-client.component';
import { DialogEditClientComponent } from './../dialog-edit-client/dialog-edit-client.component';

import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {
  tabs = [];
  selected = new FormControl(0);
  public clientForm: FormGroup;
  description:any;
  constructor(public dialog: MatDialog,private  _clientService:ClientService,public fb: FormBuilder,private dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.description=data;
     }

  ngOnInit() {
    this.initClient();
    console.log(this.description);
    this.clientForm.patchValue(this.description);
    console.log(this.clientForm);
    for(let x in (this.description['contacts'])){
      console.log(x);
      this.tabs.push(x);
      console.log(this.tabs);

    }    
  }

  addContact(contact){
      console.log(this.tabs);
    const control = <FormArray>this.clientForm.controls['contacts'];
    console.log("ACA");
    control.push(contact);
    
  }
  initClient(){
    this.clientForm = this.fb.group({
      cod: ['',[Validators.required]],
      cuit_dni: [''],
      business_name: [''],
      fantasy_name:[''],
      address: [''],
      con_iva:['responsable_inscripto'],
      obs:[''],
      primer_aviso:[''],
      segundo_aviso:[''],
      tercer_aviso:[''],
      aviso_baja:[''],
      aviso_corte:[''],
      contacts: this.fb.array([ ])
      
    });
  }
 

  addTab() {
    
    this.tabs.push('New');
    

      this.selected.setValue(this.tabs.length);
    
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  openDialogModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    
    const dialogRef = this.dialog.open(DialogCreateClientComponent, dialogConfig);
 
    dialogRef.afterClosed().subscribe(
        
        data => (data ==true) ? this.save() : 'invalid'
    );
    
  }
  openDialogEdit() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    
    const dialogRef = this.dialog.open(DialogEditClientComponent, dialogConfig);
 
    dialogRef.afterClosed().subscribe(
        
        data => (data ==true) ? this.updateClient(this.description['id']) : 'invalid'
    );
    
  }  
  save() {
    console.log(this.clientForm.value);
    
      
      this._clientService.addClientWithPromise(this.clientForm.value);
      this.dialogRef.close(true);
        
}
updateClient(id){
  console.log(this.clientForm.value);
  this._clientService.updateClient(id,this.clientForm.value);
  this.dialogRef.close(true);
}
  close() {
    this.dialogRef.close();
}
}
