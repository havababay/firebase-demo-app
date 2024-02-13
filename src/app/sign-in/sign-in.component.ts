import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  email = '';
  password = '';

  constructor(private authService : AuthService,
    private router : Router) {}

  async onSignInClicked() {
    await this.authService.signIn(this.email, this.password).then(() => this.router.navigate(['']));
  }
}
