import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Books } from '../books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  selectedId : number;
  @Input() book: Books[];
  selectedBook : Books[];
  constructor(private route:ActivatedRoute,private bookService:BooksService) { 
    
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params=>{
      this.selectedId = Number(params.get('id'));
    });

    this.selectedBook = this.bookService.getBooksById(this.selectedId);
    this.book = Object(this.selectedBook);
  }
}
