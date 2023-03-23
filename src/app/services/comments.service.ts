import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comments } from '../dto/Comments';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

comments : Comments[]=[];
myDate =  new Date();
id!: string;

url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient) { 

  }



  getComment(id:string)
  {
   return this.http.get<Comments>(this.url+"/getGameComment?commentID="+id);
  }

  getComments(id:string)
  {
   return this.http.get<Comments[]>(this.url+"/getGameComments?gameId="+id).pipe(tap((g)=>{this.comments = g}));
  }

}
