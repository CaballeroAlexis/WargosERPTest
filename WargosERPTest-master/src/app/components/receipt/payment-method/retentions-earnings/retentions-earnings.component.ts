import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-retentions-earnings',
  templateUrl: './retentions-earnings.component.html',
  styleUrls: ['./retentions-earnings.component.css']
})
export class RetentionsEarningsComponent implements OnInit {
  public retentionsEarningForm: FormGroup;
  @Output() sendPay = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.retentionsEarningForm = this.fb.group({
      monto: [''],
      numero_retencion: [''],
      fecha_retencion: [''],
      type:['retentions-earning']
  });
  if(this.retentionsEarningForm.controls['monto'] != null){
    this.sendPay.emit(this.retentionsEarningForm);
  }
  }

}
