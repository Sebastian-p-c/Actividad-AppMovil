import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any[] = [];
  userAge: number = 0;

  constructor(
    private cartService: CartService,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.userAge = this.getUserAge();
  }

  getUserAge(): number {
    const user = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    return user.age || 0;
  }

  async purchase() {
    if (this.cart.length === 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El carrito está vacío.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    let totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;
    let tipodescuent = '';


    if (this.userAge > 60) {
      discount = totalPrice * 0.20;
      tipodescuent = '20%'; 
    } else if (this.userAge < 18) {
      discount = totalPrice * 0.10;
      tipodescuent = '10%'; 
    }

    const finalPrice = totalPrice - discount;

    const alert = await this.alertController.create({
      header: 'Compra Exitosa',
      message: `Total antes de descuento: ${totalPrice.toFixed(2)}\nDescuento aplicado: ${tipodescuent} (${discount.toFixed(2)})\nTotal después de descuento: ${finalPrice.toFixed(2)}`,
      buttons: ['OK']
    });

    await alert.present();

    this.cartService.clearCart(); 
    this.cart = [];
  }

}
