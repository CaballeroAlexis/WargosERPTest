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
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

//Services
import {AuthService} from './services/auth.service'
import {AuthGuardService} from './services/auth-guard.service';
import { DialogDeleteClientComponent } from './components/client/dialog-delete-client/dialog-delete-client.component';
import { DialogCreateClientComponent } from './components/client/dialog-create-client/dialog-create-client.component';
import { DialogModalComponent } from './components/client/dialog-modal/dialog-modal.component';
import { DialogEditClientComponent } from './components/client/dialog-edit-client/dialog-edit-client.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSideComponent,
    ClientComponent,
    ModalClientComponent,
    ClientContactComponent,
    ContactMediaComponent,
    WelcomeComponent,
    DialogDeleteClientComponent,
    DialogCreateClientComponent,
    DialogModalComponent,
    DialogEditClientComponent
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
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDeleteClientComponent,DialogCreateClientComponent,DialogModalComponent,DialogEditClientComponent]
})
export class AppModule { }
