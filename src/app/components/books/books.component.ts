import { Component, OnInit, Input } from '@angular/core';
import { Books } from '../books';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  inputs:['bookdetail']
})
export class BooksComponent implements OnInit {
  
  @Input() book : Books;
  bookdetail : Books;
  constructor(private route:ActivatedRoute) {     
  }

  ngOnInit(): void {
   
  }

}
