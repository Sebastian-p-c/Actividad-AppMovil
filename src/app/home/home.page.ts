import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = 'user';
  password: string = '1234';
  loginMessage!: string;

  constructor(private router: Router) {}

  Loginvalidate() {
    console.log("Ejecutando validación");

    if (this.username === 'admin' && this.password === 'admin') {
      this.loginMessage = 'Login correcto';

      let extras: NavigationExtras = {
        state: { user: this.username }
      }

      this.router.navigate(['/index'], extras);

    } else {
      this.loginMessage = 'Login incorrecto';
    }
  }
}

