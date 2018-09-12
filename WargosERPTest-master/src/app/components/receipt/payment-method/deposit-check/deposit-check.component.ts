import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-deposit-check',
  templateUrl: './deposit-check.component.html',
  styleUrls: ['./deposit-check.component.css']
})

export class DepositCheckComponent implements OnInit {
  public depositCheckForm: FormGroup;
  @Output() sendPay = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.depositCheckForm = this.fb.group({
      monto: [''],
      cuenta: [''],
      numero_referencia: [''],
      numero_cheque: [''],
      type:['deposit-check']
  });
  if(this.depositCheckForm.controls['monto'] != null){
    this.sendPay.emit(this.depositCheckForm);
  }
  
  }
}


