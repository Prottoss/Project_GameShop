import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  firstname: string = "";
  surname: string = "";
  password: string = "";
  email: string = "";
  dob: any;
  gender: string = "";
  userType: string = "user";
  accountCreated!: Date;




  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    

  }

}
