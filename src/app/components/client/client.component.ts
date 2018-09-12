import { Component, OnInit,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ClientService} from '../../services/client.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogDeleteClientComponent } from './dialog-delete-client/dialog-delete-client.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  closeResult: string;
  action='new';
  dataFicha:object;
  clients:any[]=[];
  description:string;
  constructor(private router:Router, private modalService: NgbModal,public  _clientService:ClientService, private httpClient:HttpClient,public dialog: MatDialog) {

   }
  
 
  ngOnInit() {

    
    this._clientService.getClient().subscribe((data:any)=>{
      this.clients=data;});
      
      $( "#modalClient" ).on('hide.bs.modal', ()=>{
       
       this._clientService.getClient().subscribe((data:any)=>{
        this.clients=data;});
        console.log(this.clients);
    });

    $( "#modalClient" ).on('show.bs.modal', ()=>{
      this._clientService.getClient().subscribe((data:any)=>{
       this.clients=data;});
       console.log(this.clients);
   });
    }

  deleteClient(id){
    
    this._clientService.deleteClient(id);
    this._clientService.getClient().subscribe((data:any)=>{console.log(data)
      this.clients=data})    
     
    } 
  myFunction(){
    var input, filter, table, tr, td, i,j;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("tableClient");
          tr = table.getElementsByTagName("tr");
          // Loop through all table rows, and hide those who don't match the search query
          
          for (i = 0; i < tr.length; i++) {
            for (j = 0; j < 4; j++) {            
              td = tr[i].getElementsByTagName("td")[0];
              console.log(td);
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }
  }

  llenarFicha(client){
    this.dataFicha={action:'edit',data:client};
    console.log(this.dataFicha);
  }

  newClient(){
    this.dataFicha={action:'new'}
  }
  openDialog(id_cliente) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    
    const dialogRef = this.dialog.open(DialogDeleteClientComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        
        data => (data ==true) ? this.deleteClient(id_cliente)   : 'invalid'
    );
    
}

openDialogModal(client) {
  const dialogConfig = new MatDialogConfig();
  console.log(client);
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

  
  const dialogRef = this.dialog.open(DialogModalComponent,   {
    width: '80%', height: '90%',
    data : client,
    panelClass : "formFieldWidth480"
  });

  dialogRef.afterClosed().subscribe(
      
    data => (data ==true) ? this._clientService.getClient().subscribe((data:any)=>{
      this.clients=data;}) : 'invalid'

  );
  
}
}
