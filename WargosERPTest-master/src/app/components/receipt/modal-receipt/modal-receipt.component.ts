import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-receipt',
  templateUrl: './modal-receipt.component.html',
  styleUrls: ['./modal-receipt.component.css']
})
export class ModalReceiptComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,private fb: FormBuilder) { }
  selected = new FormControl(0);
  public receiptForm: FormGroup;
  borrar:string;
  
  ngOnInit() {
    this.receiptForm = this.fb.group({
      punto_venta: [''],
      numero_recibo: [''],
      CUIT: [''],
      cliente:[''],
      razon_social: [''],
      fecha_creacion:[''],
      total_deudor:[''],
      deudor_aplicado: [''],
      total:['']
         
    });
  }
  saveReceipt(){
    console.log(this.receiptForm.value);
  }

}
