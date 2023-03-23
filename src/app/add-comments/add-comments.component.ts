import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';
import { Comments } from '../dto/Comments';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {

  @Input() comments : Comments;
  game : Game;
  comment : string = "";


  constructor(private gameService : GamesService) {
    this.comments = Comments.generateEmptyComment()
    this.game = Game.generateEmptyGame();
  }

  ngOnInit(): void {
  }

  addComments(){
    if(this.comment=="")
      alert("Please Enter Comment");
    else{
      var toAdd = this.comment; 
      //Should the ID of the game being passed but returns blank      
      console.log("This GameID: ", this.game.gameID);
      //Can't add game with blank ID
      this.gameService.addComments(this.game.gameID, toAdd).subscribe();
      console.log("Comment added was: "+ toAdd); 
      this.comment = ""
    }
  }

}
