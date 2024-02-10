import {Component} from '@angular/core';
import {MaterialModule} from '../../../app/material.module';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
  ],
  styles: [
    `
      .login {
        width: 100%;
        height: 100vh;
        background-color: #f3f3f4;
        justify-content: center;
        align-items: center;

        &__title {
          color: #E5008F;
        }

        &__form {

          &--button {
            background-color: #E5008F;
            color: white;
          }
        }
      }

      a {
        margin-top: 20px;
        font-size: 14px;
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 14px;
      }

      .mat-mdc-button:not(:disabled) {
       color: white;
      }
    `
  ]
})
export class LoginComponent {
  constructor(
    private readonly router: Router
  ) {
  }
  onLogin() {
    this.router.navigateByUrl('home');
  }
}
