import {RouterModule,Routes} from '@angular/router';
import {ClientComponent} from './components/client/client.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AuthGuardService} from './services/auth-guard.service';

const  APP_ROUTES: Routes=[
    {path:'client',component:ClientComponent,
    canActivate:[AuthGuardService ]},
    {path:'home',component:WelcomeComponent},

    {path: '**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);