import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  public cashForm: FormGroup;
  @Output() sendPay = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cashForm = this.fb.group({
      monto: [''],
      type:['cash']
  });
  this.sendPay.emit(this.cashForm);
  }

}
