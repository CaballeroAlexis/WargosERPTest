import {RouterModule,Routes} from '@angular/router';
import {ClientComponent} from './components/client/client.component';


const  APP_ROUTES: Routes=[
    {path:'client',component:ClientComponent},


    {path: '**', pathMatch:'full',redirectTo:'client'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);