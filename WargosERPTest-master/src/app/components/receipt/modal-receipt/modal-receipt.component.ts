import { Component, OnInit,Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptService} from '../../../../../src/services/receipt.service'

@Component({
  selector: 'app-modal-receipt',
  templateUrl: './modal-receipt.component.html',
  styleUrls: ['./modal-receipt.component.css']
})
export class ModalReceiptComponent implements OnInit {
  closeResult: string;
  @Input('receipt')  public dataReceipt:object;
  lista:any[]=["1","2"];
  constructor(private modalService: NgbModal,private fb: FormBuilder, private service:ReceiptService) {
    
   }
  selected = new FormControl(0);
  public receiptForm: FormGroup;
  borrar:string;
  
  ngOnInit() {
    console.log(this.dataReceipt);
    this.receiptForm = this.fb.group({
      punto_venta: [''],
      numero_recibo: [''],
      CUIT: [''],
      cliente:[''],
      razon_social: [''],
      fecha_creacion:[''],
      total_deudor:[''],
      deudor_aplicado: [''],
      total:[''],
      factura_recibo: this.fb.array([]),
      paymentMethod: this.fb.array([]),
      
      
    });

    
   
    
  }
  saveReceipt(){
    console.log(this.receiptForm.value);
    console.log(this.dataReceipt['data']);
    this.service.addReceiptWithPromise(this.receiptForm.value);
  }

  addBillReceipt(billReceipt){
    console.log(billReceipt);
    const x = <FormArray>this.receiptForm.controls['factura_recibo'];
    x.push(billReceipt);

  }
  addPaymentMethod(paymentMethod){
    const x = <FormArray>this.receiptForm.controls['paymentMethod'];
    x.push(paymentMethod);
  }
  addTotals(totalsReceipt){
    const x = <FormArray>this.receiptForm.controls['recibo_totales'];
    x.push(totalsReceipt);

  }
 

}
