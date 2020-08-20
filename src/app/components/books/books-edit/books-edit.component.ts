import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {

  constructor(private form:FormBuilder) { 
    
  }

  bookEditForm;
  

  ngOnInit(): void {
    this.bookEditForm = this.form.group({
      category: [Validators.required],
      author: [Validators.required],
      title:[Validators.required],
      created_at:[Validators.required],
      image:[Validators.required],
      description:[Validators.required]
    });   
    
  }
  bookSubmit(form){
    console.log(form);
  }

}
