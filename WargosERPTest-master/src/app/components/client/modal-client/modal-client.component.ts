import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.css']
})
export class ModalClientComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,private fb: FormBuilder) { }
  tabs = [];
  selected = new FormControl(0);
  public clientForm: FormGroup;
  borrar:string;
  ngOnInit() {
    this.clientForm = this.fb.group({
      cod_cliente: ['', Validators.required],
      cuit_dni: [''],
      razon_social: [''],
      nombre_ficticio:[''],
      direccion: [''],
      con_iva:['responsable_inscripto'],
      observacion:[''],
      primer_aviso:[''],
      segundo_aviso:[''],
      tercer_aviso:[''],
      aviso_baja:[''],
      aviso_corte:[''],
      contacts: this.fb.array([])
      
    });

    


  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  initQuestion() {
    return this.fb.group({
      type: [''],
      description: ['']
    });
  }


  addTab() {
    this.tabs.push('Contacto '+(this.tabs.length+1));
    this.selected.setValue(this.tabs.length - 1);
    const control = <FormArray>this.clientForm.controls['contacts'];
    const questionCtrl = this.initQuestion();
    control.push(questionCtrl);    
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

    saveClient(){
      console.log(this.clientForm.value);
    }

}
