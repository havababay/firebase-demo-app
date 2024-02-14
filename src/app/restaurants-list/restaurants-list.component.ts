import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsListComponent { }
