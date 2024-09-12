import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';
  loginMessage!: string;

  constructor(private router: Router) {}

  Loginvalidate() {
    console.log('Validando login');

    
    const storedUser = localStorage.getItem('registeredUser');
    
    if (storedUser) {
      const user = JSON.parse(storedUser);


      if (this.username === user.username && this.password === user.password) {
        this.loginMessage = 'Login correcto';
        
        this.router.navigate(['/index'], { state: { user: this.username } });
      } else {
        this.loginMessage = 'Usuario o contraseña incorrectos';
      }
    } else {
      this.loginMessage = 'No hay ningún usuario registrado';
    }
  }
}

