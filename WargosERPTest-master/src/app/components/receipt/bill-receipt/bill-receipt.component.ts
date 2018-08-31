import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-receipt',
  templateUrl: './bill-receipt.component.html',
  styleUrls: ['./bill-receipt.component.css']
})
export class BillReceiptComponent implements OnInit {
  lista:any[]=["1","2"];
  constructor() { }

  ngOnInit() {
  }

}
