import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core' ;
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule]
})

@Component({
  selector: 'app-item-atrribute',
  templateUrl: './item-atrribute.component.html',
  styleUrls: ['./item-atrribute.component.css']
})


export class ItemAtrributeComponent implements OnInit {
  attribute:Object[]=[{},{},{}];
  constructor(private _button:MatButtonModule, private _checkBox:MatCheckboxModule) { }

  ngOnInit() {
  }

}
