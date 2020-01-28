import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mentioned';
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";


  constructor(private frmbuilder:FormBuilder){
    this.signupForm=frmbuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required,Validators.maxLength(10)],
      EmailId:['',Validators.required,Validators.email],
      userpassword:['',Validators.required]
    });
  }
  ngOnInit(){

  }
  PostData(signupForm:any)
  {
    this.FirstName=signupForm.controls.fname.value;
    this.LastName=signupForm.controls.lname.value;
    this.Email=signupForm.controls.EmailId.value;
    console.log(this.FirstName);

     console.log(signupForm.controls);
  }
}
