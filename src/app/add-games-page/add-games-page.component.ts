import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-games-page',
  templateUrl: './add-games-page.component.html',
  styleUrls: ['./add-games-page.component.css']
})
export class AddGamesPageComponent implements OnInit {

  game : Game = Game.generateEmptyGame();

  constructor(public userService: UsersService) { }

  ngOnInit(): void {

    this.userService.roleGuard("ADMIN");
  }

  getGame(Game : Game){
    //console.log(Game);
    this.game = Game;
  }

}
