import { Component,Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder,FormArray} from "@angular/forms";
@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.css']
})
export class ClientContactComponent implements OnInit {
  medias=[];
  myModel = true;
  public contactForm:FormGroup;

  @Input('s') public s:object;
  @Output()  sendContact = new EventEmitter<FormGroup>();
 
  ngOnInit(){
    //control.setValue(this.dataClient['data']['cod']);
    console.log(this.s);
    this.contactForm = this.fb.group({
      cod_contact: [''],
      name_contact: [''],
      lname_contact: [''],
      position:[''],
      obs:[''],
      medias: this.fb.array([ ]),
      not_fac:[''],
      not_first:[],
      not_sec:[],
      not_third:[],
      not_down:[],
      not_cut:['']
      
    });
    if(this.s){
      this.contactForm.patchValue(this.s);
      for(let x in (this.s['medias'])){
        this.medias.push(x);
      }
    }
    this.sendContact.emit( this.contactForm);
  }
  constructor(private fb:FormBuilder) { }

  delete_contact(){
    $("#contact_tab").remove();
    
  }
  addMediaForm(bool){
    
    const control = <FormArray>this.contactForm.controls['medias'];
    control.push(bool);

  }
  removeTab(index: number) {
    this.medias.splice(index, 1);
    const control = <FormArray>this.contactForm.controls['medias'];
    control.removeAt(index);    
  }
  
  addMedia(){
    this.medias.push('Media '+(this.medias.length+1));
  }
 
}
