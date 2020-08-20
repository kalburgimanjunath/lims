import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-book-overseas',
  templateUrl: './book-overseas.component.html',
  styleUrls: ['./book-overseas.component.scss']
})

export class BookOverseasComponent implements OnInit {

  constructor(private http : HttpClient) {

  }
  volumeInfo:Object[] =[];
  categories =["Academic Life ",
  "Alumni ",
  "Arts ",
  "Athletic",
  "Award",
  "Bates values ",
  "Collaboration ",
  "Creativity ",
  "Diversity ",
  "BatesNews ",
  "BatesNews ",
  "Civic engagement ",
  "Current topics ",
  "Health and medicine ",
  "Humanities and history ",
  "Justice and poverty ",
  "Language and literature ",
  "News and politics ",
  "Science and technology ",
  "Society and culture ",
  "Teaching and education ",
  "Events ",
  "Annual events ",
  "Exclude from Loops ",
  "livestream ",
  "Maine/world ",
  "Lewiston-Auburn ",
  "Maine and New England ",
  "People and groups ",
  "Faculty and staff ",
  "Partners and public ",
  "Service ",
  "Slideshow ",
  "Student Life ",
  "The College "];

  page = 1;

  pageSize = 10;

  
  ngOnInit(): void {

    
    let urlList:any = [];
    const createURL = this.categories.map((item)=>{
      urlList.push(this.http.get('https://www.googleapis.com/books/v1/volumes?q='+item));
    })
    

    forkJoin(urlList)
    .subscribe(Response => {   
      
      Response.map((eacharray)=>{
        console.log(eacharray);
        eacharray['items'].map((item)=>{
          let tempBook = item.volumeInfo;
          
          tempBook.image = item.volumeInfo.imageLinks.thumbnail;
          this.volumeInfo.push(tempBook);
        });
      });
    });
  }

}
