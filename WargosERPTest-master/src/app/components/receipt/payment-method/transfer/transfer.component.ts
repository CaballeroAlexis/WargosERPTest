import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public transferForm: FormGroup;
  @Output() sendPay =  new EventEmitter<FormGroup>();
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.transferForm = this.fb.group({
      monto: [''],
      numero_referencia: [''],
      fecha_acreditacion: [''],
      type:['transfer']
  });
  if(this.transferForm.controls['monto'] != null){
    this.sendPay.emit(this.transferForm);
  }
  }

}
