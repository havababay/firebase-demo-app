import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent { 
  currentUser : User | undefined;

  constructor(private authService : AuthService, private router : Router) {
    this.authService.addAuthListerer((user : User | undefined) => 
      this.currentUser = user);
  }

  shouldShowLogoutButton() : boolean {
    return (this.currentUser != undefined);
  }

  async onSignOutClicked() {
    await this.authService.signOut().then(() => this.router.navigate(['sign-in']));;
  }
}
