import { RestaurantsService } from './../services/restaurants.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../shared/model/restaurant';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent implements OnInit {
  @Input()
  currentRestaurantId? : string;

  currentRestaurant? : Restaurant;

  constructor(private restaurantsService : RestaurantsService) {}

  ngOnInit(): void {
    if (this.currentRestaurantId) {
      this.restaurantsService.getRestaurant(this.currentRestaurantId!).then(
        res => this.currentRestaurant = res
      );
    }
  } 
}
