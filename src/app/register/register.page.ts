import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  name: string = '';
  lastname: string = '';
  rut: string = '';
  pwd: string = '';
  birthday: string = '';

  constructor(private router: Router) {}

  clean() {
    this.name = '';
    this.lastname = '';
    this.rut = '';
    this.pwd = '';
    this.birthday = '';
  }

  register() {
    const userAge = this.calculateAge(new Date(this.birthday));

    const user = {
      username: this.name,
      password: this.pwd,
      birthday: this.birthday,
      age: userAge 
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    console.log('Usuario registrado: ', user);
    this.router.navigate(['/home']);
  }

  calculateAge(birthdate: Date): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifferencia = today.getMonth() - birthDate.getMonth();


    if (monthDifferencia < 0 || (monthDifferencia === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
