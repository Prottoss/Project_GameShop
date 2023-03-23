import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() user: EventEmitter<User> = new EventEmitter<User>();

  users : User[] = [];
  selectedUser : User = new User("","","","","",new Date(),"","", new Date());
  searchText : string = "";

  constructor(private userService: UsersService) { 

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{this.users = data;});
  }

  selected(user: User){
    console.log("Selected = ", user)
    this.selectedUser = user;
    this.user.emit(user);
  }

}
