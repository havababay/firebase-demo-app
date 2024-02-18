import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { canActivate  , hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

const redirectToSignIn = () => redirectUnauthorizedTo(['sign-in']);
const adminOnly = () => hasCustomClaim('admin');

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
    },
    {
        path: "new-restaurant",
        component : RestaurantFormComponent,
        ...canActivate(adminOnly)
    }
];
