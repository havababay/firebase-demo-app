import { Restaurant } from './../model/restaurant';
import { DocumentData, DocumentSnapshot, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export const restaurantConverter = {
    toFirestore: (restaurant : Restaurant) : DocumentData => {
        return {
            name: restaurant.name,
            city: restaurant.city
            };
    },
    fromFirestore: (snapshot : QueryDocumentSnapshot, options : SnapshotOptions) => {
        const data = snapshot.data(options);
        return new Restaurant(
            snapshot.id,
            data['name'],
            data['city']);
    }
};