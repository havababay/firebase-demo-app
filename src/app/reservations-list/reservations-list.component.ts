import { RestaurantsService } from './../services/restaurants.service';
import { ReservationsService } from './../services/reservations.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Reservation } from '../shared/model/reservation';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../shared/model/restaurant';

@Component({
  selector: 'app-reservations-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.css',
})
export class ReservationsListComponent implements OnInit {
  currentUserReservations : Reservation[] = [];
  idToRestaurant = new Map<string, Restaurant>();

  constructor(private reservationsService : ReservationsService,
    private restaurantsService : RestaurantsService) {}

  ngOnInit(): void {
    this.reservationsService.subscribeToCurrentUser(
      reservationsResults => {
        this.currentUserReservations = reservationsResults
        this.currentUserReservations.forEach( reservation => 
          this.restaurantsService.getRestaurant(reservation.resturantId).then(
            restaurant => {
              if (restaurant) {
                this.idToRestaurant.set(restaurant.id, restaurant)
              }
            }
          )
        );
        }
    );
  } 
}
