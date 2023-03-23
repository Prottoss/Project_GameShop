import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // add this here: if logged in, redirect to main page, else:
    window.location.href="https://game-store.auth.us-east-1.amazoncognito.com/signup?client_id=1dt06sc8ku8m5q6djfjn9op03o&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=localhost:4200";
  }

}
