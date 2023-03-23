import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.css']
})
export class SupplierPageComponent implements OnInit {

  game : Game = Game.generateEmptyGame();

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.roleGuard("ADMIN");
  }

  getGame(Game : Game){
    this.game = Game;
  }

}
