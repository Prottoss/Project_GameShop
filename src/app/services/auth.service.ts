import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { ShoppingCartService } from './shopping-cart.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";
  cart: any [] = [];

  constructor(private http: HttpClient, private cartService: ShoppingCartService) { }


  login(username:string, password:string) 
  {
    return this.http.post(AuthService.url +"/login", {"username":username, "password":password})
    .pipe( tap( (res:any)=>
    {
      //console.group("AuthService Login response = ",res);
      if(res['success']==true)
      {
        const token = res['data']['id_token'];
        console.log("Login Successful id_token =",token);
        localStorage.setItem('id_token', token);
        localStorage.setItem("username",username);
        localStorage.setItem("loggedInUser",JSON.stringify(res['data']['loggedInUser']));
        localStorage.setItem('refresh_token',res['data']['refresh_token']);
        localStorage.setItem("cart",JSON.stringify(this.cart));
      }else{
        alert("Login Failed: " + res['Msg']);
      }
    }));
  }


  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('loggedInUser');
    this.cartService.emptyCart();
    localStorage.removeItem("cart");
  }

  isLoggedIn() : boolean{
    return localStorage.getItem('id_token') != null;
  }

}
