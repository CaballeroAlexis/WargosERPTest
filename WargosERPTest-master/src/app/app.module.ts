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
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ModalReceiptComponent } from './components/receipt/modal-receipt/modal-receipt.component';
import { TotalsReceiptComponent } from './components/receipt/totals-receipt/totals-receipt.component';
import { BillReceiptComponent } from './components/receipt/bill-receipt/bill-receipt.component';
import { PaymentMethodComponent } from './components/receipt/payment-method/payment-method.component';
import { CashComponent } from './components/receipt/payment-method/cash/cash.component';
import { DepositCheckComponent } from './components/receipt/payment-method/deposit-check/deposit-check.component';
import { TransferComponent } from './components/receipt/payment-method/transfer/transfer.component';
import { RetentionsIvaComponent } from './components/receipt/payment-method/retentions-iva/retentions-iva.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent ,
    NavbarSideComponent,
    ClientComponent,
    ModalClientComponent,
    ClientContactComponent,
    ContactMediaComponent,
    ReceiptComponent,
    ModalReceiptComponent,
    TotalsReceiptComponent,
    BillReceiptComponent,
    PaymentMethodComponent,
    CashComponent,
    DepositCheckComponent,
    TransferComponent,
    RetentionsIvaComponent
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
