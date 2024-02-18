import { RestaurantsService } from './../services/restaurants.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Restaurant } from '../shared/model/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule
  ],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantFormComponent { 
  currentRestaurant = new Restaurant("","","");

  constructor(private restaurantsService : RestaurantsService,
    private router : Router) {}

  onSaveRestaurantClicked() {
    this.restaurantsService.createRestaurant(this.currentRestaurant).then(
      (newId : string) => this.router.navigate(["restaurant", newId])
    );
  }
}
