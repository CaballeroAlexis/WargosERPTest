import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-retentions-iva',
  templateUrl: './retentions-iva.component.html',
  styleUrls: ['./retentions-iva.component.css']
})
export class RetentionsIvaComponent implements OnInit {
  public retentionsIva: FormGroup;
  @Output() sendPay =  new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.retentionsIva = this.fb.group({
      monto: [''],
      numero_retencion: [''],
      fecha_retencion: [''],
      type:['retentions-iva']
  });
  if(this.retentionsIva.controls['monto'] != null){
    this.sendPay.emit(this.retentionsIva);
  }
  }

}
