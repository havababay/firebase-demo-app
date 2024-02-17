import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { Reservation } from "../model/reservation";

export const reservationConverter = {
    toFirestore: (restaurant : Reservation) : DocumentData => {
        return {
                resturantId: restaurant.resturantId,
                userId: restaurant.userId,
                date: restaurant.date,
                numOfPeople: restaurant.numOfPeople,
            };
    },
    fromFirestore: (snapshot : QueryDocumentSnapshot, options : SnapshotOptions) => {
        const data = snapshot.data(options);
        return new Reservation(
            snapshot.id,
            data['resturantId'],
            data['userId'],
            new Date(data['date'] * 1000),
            data['numOfPeople']);
    }
};