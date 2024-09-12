import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  username: string = 'guest';
   
  constructor(
    private router: Router,
    private cartService: CartService
  ) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if(state && state['user']){
      this.username = state['user'];
    }
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    console.log('Ticket añadido:', item);
  }
  
  ngOnInit() {
  }

}
