import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ReceiptService } from '../../../services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  closeResult: string;
  receipts:any[]= [];
  idReceipt:any =null;
  dataFicha:object;
  
  constructor(private router:Router, private modalService: NgbModal, private _receiptService:ReceiptService) { }
  
  newReceipt(){
    this.dataFicha={action:'new'}
  }
  editReceipt(receipt){
    this.dataFicha={action:'edit',data:receipt}
  }
  deleteReceiptVar(id){
    this.idReceipt = id;
  }
  deleteReceipt(){
   
    this._receiptService.deleteReceipt(this.idReceipt).subscribe((data:any)=>{console.log(data)
      this.receipts= data;});
  }
  ngOnInit() {
    this._receiptService.getReceipt().subscribe((data:any)=>{console.log(data)
    this.receipts= data;});
  }
  myFunction(){
    var input, filter, table, tr, td, i;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("tableClient");
          tr = table.getElementsByTagName("tr");
          // Loop through all table rows, and hide those who don't match the search query
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            } 
          }
  }
  open(content:any) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {this.closeResult = `Closed with: ${result}`;
}, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log("OPEN")
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log("ESC");
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
      
    } else {
      return  `with: ${reason}`;
    }
  }
}
