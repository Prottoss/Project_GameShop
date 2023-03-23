import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Game } from '../dto/Game';
import { Order } from '../dto/Order';
import { User } from '../dto/User';
import { GamesService } from '../services/games.service';
import { OrdersService } from '../services/orders.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UsersService } from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit 
{

  public games: Game[] = [];
  gameIds: string[] = [];
  public finalTotal: number = 0;
  user: User = User.generateEmptyUser();
  order: Order = Order.generateEmptyOrder();
  gameId!: string;

  constructor(public gameService:GamesService, private ordersService:OrdersService, private usersService: UsersService, private cartService: ShoppingCartService,private route: Router) 
  { 
    this.usersService.getUser().subscribe((data)=>{this.user = data});

    this.cartService.getCart().subscribe(res=>{
      this.games = res;
      this.finalTotal = this.cartService.getTotalPrice();
    })
  }

  @ViewChild("paypalRef", { static: true })
  private paypalRef!: ElementRef;

  ngOnInit(): void 
  {
    window.paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'horizontal',
        label: 'pay',    
      },

      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":this.finalTotal}}]
        });
      },

      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((orderData: any) =>{
          //alert("Transaction Complete!!!!!!!");

          for(let key of this.games)
          {
            this.gameIds.push(key.gameID);
          }
          console.log(this.gameIds);

          console.log(this.user.username);
          console.log(this.ordersService.makeOrder(this.gameIds, this.user.username));
          this.cartService.emptyCart();
          this.route.navigate(['/placedOrder']);

        });
      },

      onError: (err: any) => {
        console.log(err);
      }
    }).render(this.paypalRef.nativeElement);
  }


  // onBuy()
  // {
  //   for(let key of this.games)
  //   {
  //     this.gameIds.push(key.gameID);
  //   }
  //   console.log(this.gameIds);

  //   console.log(this.user.username);
  //   console.log(this.ordersService.makeOrder(this.gameIds, this.user.username));
  //   this.cartService.emptyCart();
  // }
}