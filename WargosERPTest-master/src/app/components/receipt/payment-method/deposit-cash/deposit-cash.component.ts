import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-deposit-cash',
  templateUrl: './deposit-cash.component.html',
  styleUrls: ['./deposit-cash.component.css']
})
export class DepositCashComponent implements OnInit {
  public depositCashForm: FormGroup;
  @Output() sendPay = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.depositCashForm = this.fb.group({
      monto: [''],
      cuenta: [''],
      nro_referencia: [''],
      fecha_acreditacion: [''],
      type:['deposit-cash']
  });
  this.sendPay.emit(this.depositCashForm);
  }
  }


