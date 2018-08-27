import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarSideComponent } from './components/navbar-side/navbar-side.component';
import { ClientComponent } from './components/client/client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalClientComponent } from './components/client/modal-client/modal-client.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClientContactComponent } from './components/client/client-contact/client-contact.component';
import { ContactMediaComponent } from './components/client/contact-media/contact-media.component';
import * as $ from "jquery";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent ,
    NavbarSideComponent,
    ClientComponent,
    ModalClientComponent,
    ClientContactComponent,
    ContactMediaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
