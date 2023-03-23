export class Genre{
    genreId : number;
    genreName : string;
    genreDesc : string;

    constructor(genreId : number, genreName : string, genreDesc : string){
        this.genreId = genreId;
        this.genreName = genreName;
        this.genreDesc = genreDesc;
    }

}