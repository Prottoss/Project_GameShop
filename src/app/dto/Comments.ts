export class Comments
{

    text: string;
    //Change date to display from angular and not lambda
    date: string;
    //Display username from local storage
    user : string;

    constructor (uComments: string,  cDate:string, user: string)
    {
        this.text = uComments;
        this.date = cDate; 
        this.user = user;
    }


    static generateEmptyComment(){
        return new Comments("","","");
    }
} 