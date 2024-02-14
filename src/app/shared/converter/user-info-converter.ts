import { DocumentData, DocumentSnapshot, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { UserInfo } from "../model/user-info";

export const userInforConverter = {
    toFirestore: (userInfo : UserInfo) : DocumentData => {
        return {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            bio: userInfo.bio
            };
    },
    fromFirestore: (snapshot : QueryDocumentSnapshot, options : SnapshotOptions) => {
        const data = snapshot.data(options);
        return new UserInfo(data['firstName'], data['lastName'], data['bio']);
    }
};