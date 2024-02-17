import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { canActivate  , redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

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
    {
        path: "restaurant/:currentRestaurantId",
        component : RestaurantComponent,
        ...canActivate(redirectToSignIn)
    }
];
