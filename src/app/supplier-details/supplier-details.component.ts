import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../dto/Game';
import { Publisher } from '../dto/Publisher';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  @Input()game: Game;
  
  publisher: string [] = [];
  notEditable: boolean = true;
  buttonText: string = "Edit";
  
  constructor(private gameService : GamesService) {
    this.game = Game.generateEmptyGame();
    this.game.publisher.pubName = "";
    this.game.publisher.pubEmail = "";
   }

  ngOnInit(): void { 
  }

  onSubmit()
  {
    if(this.notEditable)
    {
      this.notEditable = false;
      this.buttonText = "Save";
    }
    else
    {
      this.notEditable = true;
      this.buttonText = "Edit";

      // for(let i in details.value)
      // {
      //   if(details.value[i].length != 0 )
      //   {
      //     (this.publisher as any)[i] = details.value[i];
      //   }
      // }

      this.publisher = [this.game.publisher.pubName,this.game.publisher.pubEmail];
      console.log("Publisher = ", this.publisher);
      this.gameService.savePub(this.game.gameID,this.publisher).subscribe();
    } 
  }

}
