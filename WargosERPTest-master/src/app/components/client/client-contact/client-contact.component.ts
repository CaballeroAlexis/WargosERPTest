import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.css']
})
export class ClientContactComponent implements OnInit {
  
  @Input('group')
  public contactForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  delete_contact(){
    $("#contact_tab").remove();
  }
  addMedia(){
    
  }
}
