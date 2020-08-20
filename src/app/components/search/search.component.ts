import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search:string;
  tags = [];
  newtags = [];
  
  
  @Output() inputTag = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  selectedCategory(item:string){       
    this.tags.push(item);
    this.inputTag.emit(item);
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.newtags = this.tags;
  }
}
