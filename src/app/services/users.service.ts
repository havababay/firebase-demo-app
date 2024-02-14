import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { UserInfo } from '../shared/model/user-info';
import { userInforConverter } from '../shared/converter/user-info-converter';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore : Firestore, private authService: AuthService) { }

  async getUserInfo(userId : string) : Promise<UserInfo | undefined> {
    const userInfoDocRef = 
      doc(this.firestore, "users", userId).withConverter(userInforConverter)
    return (await getDoc(userInfoDocRef)).data();
  }

  async getCurrentUserInfo() : Promise<UserInfo | undefined> {
    const currentUser = this.authService.getCurrentUser();
    
    if (!currentUser) {
      return undefined;
    }
    return await this.getUserInfo(currentUser.id);
  }
}
