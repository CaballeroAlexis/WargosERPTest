import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-contact-media',
  templateUrl: './contact-media.component.html',
  styleUrls: ['./contact-media.component.css']
})
export class ContactMediaComponent implements OnInit {
  @Input('medias') public mediaArray:object;

  public mediaForm: FormGroup;
  @Output()  sendMedia = new EventEmitter<FormGroup>();
  constructor(private fb:FormBuilder) { }
 
  ngOnInit() {
    this.mediaForm = this.fb.group({
      type: ['telefono'],
      value: ['']
      
    });
    console.log(this.mediaArray);
    
    if(this.mediaArray){
      console.log(this.mediaArray);
      this.mediaForm.patchValue(this.mediaArray);
      console.log(this.mediaArray);
      console.log("worth");
    }    
    this.sendMedia.emit( this.mediaForm);

  }
  delete_media(){
    $("#media").remove();
  }
}
