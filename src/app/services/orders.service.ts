import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../dto/Order';
import { Subject,Observable, BehaviorSubject } from 'rxjs';
import { GamesService } from './games.service';
import { UsersService } from './users.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  //quantity: number = 0;
  //public quantity = new BehaviorSubject<any>(0);

  orders : Order[]=[];
  myDate =  new Date();
  id!: string;
  //qty!: number;
  username!: string;

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";


  constructor(private http: HttpClient, gameService:GamesService, userService:UsersService) {
  }

  // setQty(qty: number)
  // {
  //   this.quantity.next(qty);
  // }

  // getQty()
  // {
  //   return this.quantity.asObservable();
  // }

  makeOrder(gameIds:string[], username: string)
  {
    return this.http.post<string>(this.url+"/placeOrder?username="+username,gameIds).subscribe((o: string) =>
    {
      console.log("callback, g= ",o);
    });
  }
 

   getOrders()
   {
    return this.http.get<Order[]>(this.url+"/getOrders").pipe(tap((o)=>{this.orders = o}));
   }


   getOrder(id:string)
   {
     return this.http.get<Order>(this.url+"/getOrder?orderID="+id);
   } 
}
