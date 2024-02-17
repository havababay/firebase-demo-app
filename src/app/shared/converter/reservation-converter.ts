import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "firebase/firestore";
import { Reservation } from "../model/reservation";

export const reservationConverter = {
    toFirestore: (restaurant : Reservation) : DocumentData => {
        return {
                resturantId: restaurant.resturantId,
                userId: restaurant.userId,
                date: Timestamp.fromDate(restaurant.date),
                numOfPeople: restaurant.numOfPeople,
            };
    },
    fromFirestore: (snapshot : QueryDocumentSnapshot, options : SnapshotOptions) => {
        const data = snapshot.data(options);
        return new Reservation(
            snapshot.id,
            data['resturantId'],
            data['userId'],
            data['date'].toDate(),
            data['numOfPeople']);
    }
};