import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { canActivate  , redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';

const redirectToSignIn = () => redirectUnauthorizedTo(['sign-in']);

export const routes: Routes = [
    {
        path: "sign-in", 
        component: SignInComponent
    },
    {
        path: "", 
        component: RestaurantsListComponent,
        ...canActivate(redirectToSignIn)
    },
];
