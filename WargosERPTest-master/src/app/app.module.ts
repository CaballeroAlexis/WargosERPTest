import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarSideComponent } from './components/navbar-side/navbar-side.component';
import { ClientComponent } from './components/client/client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalClientComponent } from './components/client/modal-client/modal-client.component';
import {MatTabsModule} from '@angular/material/tabs';
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
import { RetentionsIibbComponent } from './components/receipt/payment-method/retentions-iibb/retentions-iibb.component';
import { RetentionsEarningsComponent } from './components/receipt/payment-method/retentions-earnings/retentions-earnings.component';
import { RetentionsSUSSComponent } from './components/receipt/payment-method/retentions-suss/retentions-suss.component';
import { DepositCashComponent } from './components/receipt/payment-method/deposit-cash/deposit-cash.component';
import { CheckComponent } from './components/receipt/payment-method/check/check.component';


import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ItemAtrributeComponent } from './components/item-atrribute/item-atrribute.component';

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
    RetentionsIvaComponent,
    RetentionsIibbComponent,
    RetentionsEarningsComponent,
    RetentionsSUSSComponent,
    DepositCashComponent,
    CheckComponent,
    ItemAtrributeComponent
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
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
