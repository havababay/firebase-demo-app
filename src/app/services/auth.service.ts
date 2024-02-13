import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User } from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : Auth) { }

  async signIn(email : string, password: string) : Promise<User> {
    return signInWithEmailAndPassword
      (this.afAuth, email, password).
      then((res : UserCredential) => 
        new User())
      //.catch((error) => { 
       // throw new Error('Failed to sign in', error);
      //})
      ;
  }

  async signOut() : Promise<void> {
    return signOut(this.afAuth)
      .then(() => console.log("login successful"))
      .catch((error) => { 
        throw new Error('Failed to sign out', error);
      });
  }

  addAuthListerer(callback : (user? : User) => void) : void {    
    const onChange = (afUser: any) => {
      if (afUser) {
        callback(new User());
      } else {
        callback();
      }
    }

    this.afAuth.onAuthStateChanged(onChange);
  }

  getCurrentUser() : User | undefined {
    const user = this.afAuth.currentUser;

    if (!user) {
      return;
    } else {
      return new User();
    }
  }
}
