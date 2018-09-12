import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-bill-receipt',
  templateUrl: './bill-receipt.component.html',
  styleUrls: ['./bill-receipt.component.css']
})
export class BillReceiptComponent implements OnInit {
 
  constructor(private fb: FormBuilder) { }
  public billReceiptForm: FormGroup;
  @Input('dataBillReceipt')  public dataBillReceipt:object;
 
  @Output() sendBillReceipt = new EventEmitter<FormGroup>();

  ngOnInit() {
    console.log(this.dataBillReceipt);
    this.billReceiptForm = this.fb.group({
      emision_factura: [''],
      numero_factura: [''],
      monto: [''],
      saldo:[''],
      cancelacion: [''],
      nuevo_saldo: ['']
  });
  console.log(this.sendBillReceipt);
  this.sendBillReceipt.emit(this.billReceiptForm);
  
  }
}
