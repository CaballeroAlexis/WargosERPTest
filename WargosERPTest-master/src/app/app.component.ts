import { Component } from '@angular/core';
import { NgModule } from '@angular/core' ;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  
  imports: [BrowserAnimationsModule],
  
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
