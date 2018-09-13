import {RouterModule,Routes} from '@angular/router';
import {ClientComponent} from './components/client/client.component';
import {ReceiptComponent} from './components/receipt/receipt.component';
import { ItemAtrributeComponent } from './components/item-atrribute/item-atrribute.component';


const  APP_ROUTES: Routes=[
    {path:'client',component:ClientComponent},
    {path:'receipt',component:ReceiptComponent},
    {path:'itemAtrribute',component:ItemAtrributeComponent},


    {path: '**', pathMatch:'full',redirectTo:'client'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);