import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
  

  constructor(private form:FormBuilder) { 
    
  }
  loginForm;
  

  ngOnInit(): void {
    this.loginForm = this.form.group({
      username: [Validators.required],
      password: [Validators.required]
    });    
  }
  
  loginSubmit(){
    console.log(this.loginForm);
  }
  

}
