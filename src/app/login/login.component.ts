import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string= "";
  errorMsg = "";

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.auth.logout();
  }

  submit(){
    console.log("Submit pressed");
    this.auth.login(this.username, this.password).subscribe( (resp)=>
    {
      if('success' in resp)
      {
        if(resp['success']==true)
        {
          this.router.navigate(['games']);
        }
        else{
          console.log("Login error", resp['Msg']);
          this.errorMsg = resp['Msg'];
        }
      }
    });
  }

}
