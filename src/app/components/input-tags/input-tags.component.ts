import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BooksService} from '../../services/books.service';
@Component({
  selector: 'app-input-tags',
  templateUrl: './input-tags.component.html',
  styleUrls: ['./input-tags.component.scss']
})
export class InputTagsComponent implements OnInit {

  constructor(private booksService: BooksService) {

  }
  allcategory = [];
  @Output() selectedCategory = new EventEmitter<string>();

  ngOnInit(): void {
    this.allcategory = this.booksService.getAllBooksCategory();    
  }
  inputTags(category:string){
    this.selectedCategory.emit(category);
  }

}
