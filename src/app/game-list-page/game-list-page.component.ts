import { Component, Input, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';
import { GenresSelectComponent } from '../genres-select/genres-select.component';

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  chosenGenre = "";
  nameText = "";
  priceRangeMin : number = 0;
  priceRangeMax : number = 200;
  loaded : boolean = false

  constructor( public gamesService: GamesService, public genresComp: GenresSelectComponent) { }

  ngOnInit(): void 
  {
    this.gamesService.getGames().subscribe((data)=>{this.games = data;this.loaded=true}); // get all game data, it will be filtered with the pipe later
  }

  genreChosen(genreName: string){
    console.log(genreName);
  }




}
