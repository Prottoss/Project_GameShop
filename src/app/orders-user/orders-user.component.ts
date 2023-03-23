import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-orders-user',
  templateUrl: './orders-user.component.html',
  styleUrls: ['./orders-user.component.css']
})
export class OrdersUserComponent implements OnInit {

  user: User = User.generateEmptyUser();

  constructor(public usersService:UsersService) 
  {
    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }

  ngOnInit(): void {
  }

  // selected(order : User){
  //   console.log("Selected = "+ order)
  //   this.selectedOrder = order;
  //   this.userOrder.emit(order);
  // }

}
