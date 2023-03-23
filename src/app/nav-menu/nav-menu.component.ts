import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public totalCartAmount: number = 0;
  nameText!: string;

  constructor(public auth:AuthService, private cartService: ShoppingCartService,public userService : UsersService) 
  {
    
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(res=>
    {
      this.totalCartAmount = res.length;
    })
  }
}
