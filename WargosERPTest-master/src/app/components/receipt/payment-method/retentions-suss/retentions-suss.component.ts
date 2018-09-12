import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-retentions-suss',
  templateUrl: './retentions-suss.component.html',
  styleUrls: ['./retentions-suss.component.css']
})
export class RetentionsSUSSComponent implements OnInit {
  public retentionsSuss: FormGroup;
  @Output() sendPay =  new EventEmitter<FormGroup>();

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.retentionsSuss = this.fb.group({
      monto: [''],
      numero_retencion: [''],
      fecha_retencion: [''],
      type:['retentions-suss']
  });
  if(this.retentionsSuss.controls['monto'] != null){
    this.sendPay.emit(this.retentionsSuss);
  }
  }

}
