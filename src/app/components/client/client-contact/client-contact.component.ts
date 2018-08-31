import { Component,Input, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.css']
})
export class ClientContactComponent implements OnInit {
  medias=[1,2];
  @Input('group')
  public contactForm: FormGroup;

  ngOnInit(){
  }
  constructor() { }

  delete_contact(){
    $("#contact_tab").remove();
    
  }
  addMedia(){
    this.medias.push(2);
  }
}
