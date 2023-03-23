import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit {

  @Output() user: EventEmitter<User> = new EventEmitter<User>();

  users : User[] =[];
  selectedOrder : User = User.generateEmptyUser();
  searchText : string = "";
  
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.roleGuard("ADMIN");
    this.userService.getUsers().subscribe( (data)=>{
      this.users = data;
      console.log(data[0].username);
      console.log(data[0].userOrders);
    } );
  }
}