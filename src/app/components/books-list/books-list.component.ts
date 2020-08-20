import { Component, OnInit,Input } from '@angular/core';
import { BooksComponent} from '../books/books.component'
import { Books } from '../books';
import { BooksService } from 'src/app/services/books.service';
import { BookFilterPipe } from '../../pipe/book-filter.pipe';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
 
})
export class BooksListComponent implements OnInit {

@Input() books : Books[];
@Input() searchTxt : string;
@Input() inputTags : any;

page = 1;

pageSize = 2;

  constructor(private bookService:BooksService) { 
    
  }
  

  ngOnInit(): void {
    this.books =  this.bookService.getAllBooks();
  }
  ngOnChanges(inputTags: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(inputTags);
  }
  
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. 
    //Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  
    // console.log("hello"+ this.inputTags);
  }
  

 
  

}
