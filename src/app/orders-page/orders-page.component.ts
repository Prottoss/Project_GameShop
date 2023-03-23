import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Order } from '../dto/Order';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from '../dto/OrderItem';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orderId!: string;
  orders: Order = Order.generateEmptyOrder();
  orderItem: OrderItem = new OrderItem("","");
  private sub : any;
  orderKey!:string;
  

  constructor(private orderService: OrdersService, private route: ActivatedRoute) 
  { 
    this.sub = this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
      console.log("OrderId: ", params);
      this.orderService.getOrder(this.orderId).pipe(tap((o)=>{
        this.orders = o        
      })).subscribe();
      //console.log(this.orders)
   });
  }

  ngOnInit(): void {
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
