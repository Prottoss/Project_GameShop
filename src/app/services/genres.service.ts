import { Injectable } from '@angular/core';
import { Genre } from '../dto/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  genres : Genre[]=[];

  constructor() { 
    this.genres.push(new Genre(0,"MMORPG", "genre desc 1"));
    this.genres.push(new Genre(1,"Racing", "genre desc 2"));
    this.genres.push(new Genre(2,"Action", "genre desc 3"));
    this.genres.push(new Genre(3,"RPG", "genre desc 4"));
    this.genres.push(new Genre(4,"Adventure", "genre desc 4"));
    this.genres.push(new Genre(5,"Survival", "genre desc 4"));
  }

  getGenres(){
    return this.genres;
  }
}
