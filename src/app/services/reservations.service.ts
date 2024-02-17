import { Injectable } from '@angular/core';
import { Firestore, QueryDocumentSnapshot, QuerySnapshot, collection, doc, onSnapshot, query, where } from '@angular/fire/firestore';
import { reservationConverter } from '../shared/converter/reservation-converter';
import { Reservation } from '../shared/model/reservation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(
    private firestore : Firestore, 
    private authService : AuthService) { }

  subscribe(userId : string, callback : (reservations : Reservation[]) => void) {
    const q = query(collection(this.firestore, "reservations")
      .withConverter(reservationConverter), where("userId", "==", userId));

    const internalCallback = async (query : QuerySnapshot<Reservation>) => {
      console.log("reservations call back");

      if (query.empty) {
        callback([]);
      } else {
        callback(
          query.docs.map((doc : QueryDocumentSnapshot<Reservation>) => 
            doc.data()));
      }
    }

    onSnapshot(q, internalCallback);
  }

  subscribeToCurrentUser(callback : (reservations : Reservation[]) => void) {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      this.subscribe(currentUser.id, callback);
    }
  }
}
