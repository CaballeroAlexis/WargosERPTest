import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public checkForm: FormGroup;
  @Output() sendPay =  new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkForm = this.fb.group({
      monto: [''],
      fecha_acreditacion: [''],
      numero_cheque: [''],
      banco_origen: [''],
      type:['check']
  });
  if(this.checkForm.controls['monto'] != null){
    this.sendPay.emit(this.checkForm);
  }
  }

}
