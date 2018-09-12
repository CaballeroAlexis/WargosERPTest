import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-retentions-iibb',
  templateUrl: './retentions-iibb.component.html',
  styleUrls: ['./retentions-iibb.component.css']
})
export class RetentionsIibbComponent implements OnInit {
  public retentionsIibb: FormGroup;
  @Output() sendPay =  new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.retentionsIibb = this.fb.group({
      monto: [''],
      numero_retencion: [''],
      provincia: [''],
      fecha_retencion: [''],
      type:['retentions-iibb']
  });
  if(this.retentionsIibb.controls['monto'] != null){
    this.sendPay.emit(this.retentionsIibb);
  }
}

}
