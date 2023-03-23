import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.css']
})
export class GenresSelectComponent implements OnInit {

  @Output() chosenGenreEvent = new EventEmitter<string>();
  @Output() nameTextEvent = new EventEmitter<string>();
  @Output() rangeChangeEvent = new EventEmitter<number[]>();

  chosenGenre = "";
  nameText = "";
  rangeMin : number = 0;
  rangeMax : number = 200;

  constructor(public genresService: GenresService) { }

  ngOnInit(): void {
    this.chosenGenreEvent.emit(this.chosenGenre);
    //this.nameTextEvent.emit(this.nameText);
    
  }

  onGenreChanged(genreChangeEvent: Event){
    this.chosenGenre = (<HTMLInputElement>genreChangeEvent.target).value;
    this.chosenGenreEvent.emit(this.chosenGenre);
  }

  onPriceRangeChanged(priceRangeChangeEvent: Event,changingMin: boolean){
    if (changingMin && this.rangeMin > this.rangeMax){
      this.rangeMax = this.rangeMin;
    }else if (!changingMin && this.rangeMin > this.rangeMax){
      this.rangeMin = this.rangeMax;
    }
    this.rangeChangeEvent.emit([this.rangeMin,this.rangeMax]);
  }

  onNameSearch()
  {
    //this.nameText = (<HTMLInputElement>nameTextEvent.target).value;
    this.nameTextEvent.emit(this.nameText);
  }



}
