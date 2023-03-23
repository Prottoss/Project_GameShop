import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../dto/User';
import { tap } from "rxjs/operators";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[]=[];
  user: string = "";

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient, public auth: AuthService,private router: Router)
  { 

  }
  

  getUsers()
  {
    return this.http.get<User[]>(this.url+"/getUsers").pipe(tap((u)=>{this.users = u}));
  }

  getUser()
  {
    return this.http.get<User>(this.url+"/getUser?username="+localStorage.getItem("username"));
  }

  getLoggedInUserRole(){
    var loggedInUserData=localStorage.getItem("loggedInUser");
    if (loggedInUserData == null)
    {
      return "";
    }
    var cUser : User = JSON.parse(loggedInUserData);
    return cUser.userType;
  }

  checkLoggedInUserIs(checkRole : string) : boolean{
    // checks if logged in user is of the specified role, returns true/false
    var role = this.getLoggedInUserRole();
    return role == checkRole;
  }

  roleGuard(checkRole : string){
    // if user is not of the specified role, redirect to games page
    if (!this.checkLoggedInUserIs(checkRole))
    {
      alert("You are not authorized to view this page.");
      this.router.navigate(['games']);
    }
  }
}
