import { Component, OnInit ,Input } from '@angular/core';
import { Books } from '../books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss']
})
export class BooksGridComponent implements OnInit {


  @Input() books : Books[];

  constructor(private bookService:BooksService) { 
    
  }

  ngOnInit(): void {
    this.books =  this.bookService.getAllBooks();
  }


}
