import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-media',
  templateUrl: './contact-media.component.html',
  styleUrls: ['./contact-media.component.css']
})
export class ContactMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  delete_media(){
    $("#media").remove();
  }
}
