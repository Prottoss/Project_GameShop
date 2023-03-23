import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './dto/Game';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(game: Game[], nameText: string): Game[] {
    if(!game)return [];
    if(!nameText) return game;

    nameText = nameText.toLowerCase();
    return game.filter((g: Game)=>{return g.gameName.toLocaleLowerCase().match(nameText)});
  }

}
