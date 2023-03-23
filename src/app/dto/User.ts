import { Order } from "./Order";

export class User
{
    userID: string;
    username: string;
    userFirstname: string;
    userSurname: string;
    userEmail: string;
    userDOB: Date;
    userGender: string;
    userType: string;
    userAccountCreated: Date;
    userOrders: Order[];
    userProfilePicURL: string;

    public constructor (uId: string, uName:string, uFname:string, uSurname: string, uEmail:string, uDOB:Date, uGender: string, uType:string,uAccountCreated: Date)
    {
        this.userID = uId;
        this.username = uName;
        this.userFirstname = uFname;
        this.userSurname = uSurname;
        this.userEmail = uEmail;
        this.userDOB = uDOB;
        this.userGender = uGender;
        this.userType = uType;
        this.userAccountCreated = uAccountCreated;
        this.userOrders = [];
        this.userProfilePicURL = "";
    }

    static generateEmptyUser(){
        return new User("","","","","",new Date(),"","",new Date());
    }
    
}