import { ReservationsService } from './../services/reservations.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Reservation } from '../shared/model/reservation';
import { RouterModule } from '@angular/router';

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

  constructor(private reservationsService : ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.subscribeToCurrentUser(
      reservationsResults => this.currentUserReservations = 
        reservationsResults
    );
  } 
}
