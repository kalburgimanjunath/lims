import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {

  constructor(private form:FormBuilder) { 
    this.bookAddForm = this.form.group({
      category: '',
      author: '',
      title:'',
      created_at:'',
      image:'',
      description:''
    });
  }
  bookAddForm;
  

  ngOnInit(): void {
    this.bookAddForm = this.form.group({
      category: [Validators.required],
      author: [Validators.required],
      title:[Validators.required],
      created_at:[Validators.required],
      image:[Validators.required],
      description:[Validators.required]
    });   
    
  }
  bookSubmit(form){
    console.log(this.bookAddForm);
  }
}
