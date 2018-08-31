import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.css']
})
export class ModalClientComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,public fb: FormBuilder,private  _clientService:ClientService) { }
  tabs = [];
  edit=true;
  selected = new FormControl(0);
  public clientForm: FormGroup;
  borrar:string;
  clients:any[]=[];
  ngOnInit() {
    this.clients=this._clientService.getClient();
    this.clientForm = this.fb.group({
      cod_cliente: ['', Validators.required],
      cuit_dni: [''],
      razon_social: [''],
      nombre_ficticio:[''],
      direccion: [''],
      condicion_iva:['responsable_inscripto'],
      observacion:[''],
      primer_aviso:[''],
      segundo_aviso:[''],
      tercer_aviso:[''],
      aviso_baja:[''],
      aviso_corte:[''],
      contactos: this.fb.array([ ])
      
    });

    


  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  initContact() {
    return this.fb.group({
      codigo: [''],
      nombre: [''],
      apellido: [''],
      cargo: [''],
      observacion:[''],
      medios: this.fb.array([])
      
    });
  }
  initMedia() {
    return this.fb.group({
      type: [''],
      value: ['']
    });
  }

  addTab() {
    this.tabs.push('Contacto '+(this.tabs.length+1));
    this.selected.setValue(this.tabs.length - 1);
    const control = <FormArray>this.clientForm.controls['contactos'];
    const control2 = <FormArray>this.clientForm.controls['contactos'];
    const questionCtrl = this.initContact();
    const questionCtrl2 = this.initMedia();
    console.log(control2);
    control.push(questionCtrl);
    console.log(this.clientForm.controls.contactos['controls'][0]['controls']['medios']['controls']);
    
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
    const control = <FormArray>this.clientForm.controls['contactos'];
    control.removeAt(index);    
  }

    saveClient(){
      console.log(this.clientForm.value);
    }

}
