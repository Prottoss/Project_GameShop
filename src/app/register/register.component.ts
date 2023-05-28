import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from "@angular/material/radio";

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




  constructor() { }

  ngOnInit(): void {
  }

}
