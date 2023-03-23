import { NumberSymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './dto/Game';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(game: Game[], min : number,max : number): Game[] {
    if(!game)return [];

    return game.filter((g: Game)=>{return g.gamePrice >= min && g.gamePrice <= max});
  }

}
