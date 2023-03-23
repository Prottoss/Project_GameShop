import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-keys-page',
  templateUrl: './add-keys-page.component.html',
  styleUrls: ['./add-keys-page.component.css']
})
export class AddKeysPageComponent implements OnInit {

  game : Game = Game.generateEmptyGame();

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.roleGuard("ADMIN");
  }

  getGame(Game : Game){
    //console.log(Game);
    this.game = Game;
  }

}
