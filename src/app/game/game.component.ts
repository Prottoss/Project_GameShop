import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() game: EventEmitter<Game> = new EventEmitter<Game>();

  games : Game[] = [];
  selectedGame : Game = Game.generateEmptyGame();
  searchText : string = "";

  constructor(private gameService: GamesService) {
    
  }
  ngOnInit(): void {
    this.gameService.getAllGames().subscribe( (data)=>{this.games = data;} );
  }

  selected(game: Game){
    console.log("Selected = ", game)
    this.selectedGame = game;
    this.game.emit(game);
  }

}
