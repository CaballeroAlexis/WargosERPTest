import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarSideComponent } from './components/navbar-side/navbar-side.component';
import { ClientComponent } from './components/client/client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalClientComponent } from './components/client/modal-client/modal-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSideComponent,
    ClientComponent,
    ModalClientComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
