import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { canActivate  , redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToSignIn = () => redirectUnauthorizedTo(['sign-in']);

export const routes: Routes = [
    {
        path: "sign-in", 
        component: SignInComponent
    },
    {
        path: "", 
        component: ReservationsListComponent,
        ...canActivate(redirectToSignIn)
    },
];
