import { JSDocComment } from '@angular/compiler';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GameComponent } from '../game/game.component';
import { GamesService } from '../services/games.service';
import { OrdersService } from '../services/orders.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public games: Game[] = [];
  public finalTotal: number = 0;
  public maxQty: number = 0;

  constructor(private cartService: ShoppingCartService, public gameService: GamesService, public orderService: OrdersService) 
  { 
    this.cartService.getCart().subscribe(res=>{
      this.games = res;
      this.finalTotal = this.cartService.getTotalPrice();
    })  
  }  

  ngOnInit(): void {
    
  }

  removeItem(item: any)
  {
    this.cartService.removeFromCart(item);
  }

  emptyCart()
  {
    this.cartService.emptyCart();
  }

}
