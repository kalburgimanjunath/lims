import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private form:FormBuilder) { 
    
  }

  signupForm;
  

  ngOnInit(): void {
    this.signupForm = this.form.group({
      firstname: [Validators.required],
      lastname: [Validators.required],
      address: [Validators.required],
      phone: [Validators.required]
    });    
  }

}
