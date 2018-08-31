import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  medio_de_pago:any= "efectivo";
  list:any[] = ["1"];
  constructor() { }

  ngOnInit() {
  }
  select(){
    console.log("lala");
    this.medio_de_pago = $("#select").val();
    console.log($("#select").val());
   
  }

  addComponent(){
    this.list.push("1");
  }
}
