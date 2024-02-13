import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reservations-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsListComponent { }
