import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-media',
  templateUrl: './contact-media.component.html',
  styleUrls: ['./contact-media.component.css']
})
export class ContactMediaComponent implements OnInit {
  @Input('group')
  public mediaForm: FormGroup;
  constructor() { }
 
  ngOnInit() {
   
  }
  delete_media(){
    $("#media").remove();
  }
}
