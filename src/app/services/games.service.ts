import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../dto/Game';
import { tap } from "rxjs/operators";
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games : Game[]=[];
  gameId = "";

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient) 
  { 
    
  }

  setGameId(id:string)
  {
    this.gameId = id;
  }
  getGameId()
  {
    return this.gameId;
  }

  getGames()
  {
    return this.http.get<Game[]>(this.url+"/getGames").pipe(tap((g)=>{this.games = g}));
  }

  getAllGames()
  {
    return this.http.get<Game[]>(this.url+"/getGames?showHidden=true").pipe(tap((g)=>{this.games = g}));
  }

  getGame(id:string)
  {
    return this.http.get<Game>(this.url+"/getGame?gameId="+id);
  }

  addKeys(id:string, keys:string[]){
    return this.http.post(this.url+"/addKeys?gameId="+id, {"keys":keys});
  }

  savePub(id:string, pub:string[]){
    return this.http.post(this.url+"/savePublisher?gameId="+id, {"publisher":pub});
  }

  addComments(id:string, comment:string){ 
    return this.http.post(this.url+"/addGameComments?gameId="+id, {"comments":comment});
  }


  saveGame(game : Game)
  {
    console.log("Save new Game : ", game.gameName);

    if(game.gameID == "0")
    {
      this.http.post<Game>(this.url + "/addGame", game).subscribe((g: Game) => 
      {
        console.log("Callback, g = ", g);
        this.games.push(g);
      });          
    }
    else{
      this.http.post<Game>(this.url+"/addGame",game).subscribe((g: Game) =>
      {
        console.log("callback, g= ",g);
      });
    }
  }

  deleteGame(gameId : string)
  {
    for(var i = 0; i< this.games.length; i++)
    {
      if(this.games[i].gameID == gameId)
      {
        this.games.splice(i,1);
      }
    }
  }

  getKeysCount(id:String)
  {
    return this.http.get<number>(this.url+"/getStock?gameId="+id);
  }

  
}
