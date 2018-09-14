import { Component, OnInit,Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from '../../../services/client.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogCreateClientComponent } from './../dialog-create-client/dialog-create-client.component';


@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.css']
})
export class ModalClientComponent implements OnInit {
  @Input('client') public dataClient:object;

  tabs = [];
  selected = new FormControl(0);
  public clientForm: FormGroup;
  constructor(private modalService: NgbModal,public fb: FormBuilder,private  _clientService:ClientService,public dialog: MatDialog) { }
  closeResult: string;

  ngOnInit() {
    this.initClient();
    $( "#modalClient" ).on('show.bs.modal', ()=>{
      if(this.dataClient['action']=="edit"){
        const control = this.clientForm.controls['cod'];
        this.clientForm.patchValue(this.dataClient['data']);

        console.log((this.dataClient['data']['contacts']).length);

        //console.log(this.clientForm.controls['contacts']['length'].controls);
        for(let x in (this.dataClient['data']['contacts'])){
          console.log(x);
          this.tabs.push(x);
          console.log(this.tabs);

        }
        console.log(this.tabs);
      }
      else if(this.dataClient['action']=="new"){
        
        this.initClient();
        
        }

  });
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

  addContact(contact){
    
    const control = <FormArray>this.clientForm.controls['contacts'];
    console.log("ACA");
    control.push(contact);
    
  }
  addTab() {
    
    this.tabs.push('Contacto '+(this.tabs.length+1));
    console.log("Tabs: "+this.tabs);
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
    const control = <FormArray>this.clientForm.controls['contacts'];
    control.removeAt(index);    
  }

  saveClient(){
    console.log(this.clientForm.value);
    this._clientService.addClientWithPromise(this.clientForm.value);
  }

  updateClient(id){
    console.log(this.clientForm.value);
    this._clientService.updateClient(id,this.clientForm.value);
  }
 

  clean(){
    this.tabs=[];
    const control = <FormArray>this.clientForm.controls['contacts'];
    
    while (control.length !== 0) {
      control.removeAt(0)
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    
    const dialogRef = this.dialog.open(DialogCreateClientComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        
        data => (data ==true) ? this.saveClient() : 'invalid'
    );
    
}
}
