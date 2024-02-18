import { Injectable } from '@angular/core';
import { Restaurant } from '../shared/model/restaurant';
import { Firestore, doc, getDoc, collection, addDoc, DocumentReference } from '@angular/fire/firestore';
import { restaurantConverter } from '../shared/converter/restaurant-converter';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private firestore : Firestore) { }

  async getRestaurant(id : string) : Promise<Restaurant | undefined> {
    const restaurantDocRef = 
      doc(this.firestore, "restaurants", id).withConverter(restaurantConverter)
    return (await getDoc(restaurantDocRef)).data();
  }

  async createRestaurant(restaurant : Restaurant) : Promise<string> {
    collection(this.firestore, "restaurants").withConverter(restaurantConverter) 
    
    return await addDoc(
      collection(this.firestore, "restaurants").withConverter(restaurantConverter), restaurant)
        .then((ref : DocumentReference<Restaurant>) => ref.id);
  }
}
