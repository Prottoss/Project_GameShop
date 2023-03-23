import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-add-keys',
  templateUrl: './add-keys.component.html',
  styleUrls: ['./add-keys.component.css']
})
export class AddKeysComponent implements OnInit {

  @Input() game : Game;
  keys : String = "";

  constructor(private gameService : GamesService) {
    this.game = Game.generateEmptyGame();
  }

  ngOnInit(): void {
  }

  addKeys(){
    if (this.game.gameID=="")
      alert("Please select a game!");
    else if (this.keys=="")
      alert("Please enter keys!");
    else{
      var toAdd = this.keys.split("\n");
      this.gameService.addKeys(this.game.gameID, toAdd).subscribe();
      this.keys = "";
    }
  }

}
