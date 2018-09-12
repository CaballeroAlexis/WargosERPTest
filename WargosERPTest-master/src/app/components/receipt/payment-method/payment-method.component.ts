import { Component, OnInit, Output,Input ,EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  medio_de_pago:any= "efectivo";
  list:any[] = ["1"];
  //@Input('dataPayment')  public dataPayment:object;
  @Output() sendPaymentMethod = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }
  public paymentForm: FormGroup;
  ngOnInit() {
    this.paymentForm = this.fb.group({
      pay: this.fb.array([])
      
  });
  this.sendPaymentMethod.emit(this.paymentForm);
  }
  select(){
    console.log("lala");
    this.medio_de_pago = $("#select").val();
    console.log($("#select").val());
   
  }
  addPay(pay, index){
    const x = <FormArray>this.paymentForm.controls['pay'];
    x.removeAt(index);
    x.insert(index,pay);
    console.log(this.paymentForm.value);
    console.log(index);
  }

  addComponent(){
    this.list.push("x");
  }
}
