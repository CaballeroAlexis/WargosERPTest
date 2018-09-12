import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-totals-receipt',
  templateUrl: './totals-receipt.component.html',
  styleUrls: ['./totals-receipt.component.css']
})
export class TotalsReceiptComponent implements OnInit {
  @Output() sendTotals = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }
  public totalReceiptForm: FormGroup;
  ngOnInit() {
    this.totalReceiptForm = this.fb.group({
      total_deudor: [''],
      deudor_aplicado: [''],
      total: ['']
    
  });
  this.sendTotals.emit(this.totalReceiptForm);
  }

}
