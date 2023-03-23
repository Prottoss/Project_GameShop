import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './dto/Game';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(game: Game[], genreChosen: string): Game[] {
    if(!game)return [];
    if(!genreChosen) return game;

    //catStatus = catStatus.toLowerCase();
    return game.filter((g: Game)=>{return g.gameGenre.match(genreChosen)});
  }
}
