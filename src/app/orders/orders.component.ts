import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() userOrder: EventEmitter<User> = new EventEmitter<User>();

  @Input() user : User;

  users : User[] =[];
  selectedUser : User = User.generateEmptyUser();
  searchText : string = "";

  constructor(private userService: UsersService) {
    this.user = User.generateEmptyUser();
   }

  ngOnInit(): void {
    this.userService.roleGuard("ADMIN");
    this.userService.getUsers().subscribe( (data)=>{
      this.users = data;
      console.log(data[0].username);
      console.log(data[0].userOrders);
    } );
  }

  selected(user : User){
    console.log("Selected = "+user.userOrders)
    this.selectedUser = user;    
  }

}
