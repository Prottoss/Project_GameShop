import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customer-profile-page',
  templateUrl: './customer-profile-page.component.html',
  styleUrls: ['./customer-profile-page.component.css']
})

export class CustomerProfilePageComponent implements OnInit {

  user: User = User.generateEmptyUser();
  selectedFile!: File;
  uploadUrl!: string;
  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";
  loaded : boolean=false;

  constructor(public usersService:UsersService,  private http: HttpClient) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((data)=>{this.user = data;this.loaded=true});
  }

  onFileSelected(event:any)
  {
    if(event.target.files)
    {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  }

  onUpload()
  {
    this.http.post(this.url+"/uploadFile?username="+localStorage.getItem("username"),null).subscribe((res:any) =>
    {
      this.uploadUrl = res["uploadUrl"];

      this.http.put(this.uploadUrl,this.selectedFile).subscribe(res1=>
      {
        console.log(res1)
      });
    });

    
  }  
}
