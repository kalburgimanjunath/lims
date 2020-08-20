import { Injectable } from '@angular/core';
import { Books } from '../components/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books : Books[] = 
  [
    {
      id:1,
      category:'kids',
      author:"Manjunath",
      title: "New home page",
      created_at: new Date(),
      image: "https://picsum.photos/seed/picsum/200/300",
      description:"small description starts here"
    },
    {
      id:2,
      category:'kids',
      author:"Ravi Desai",
      title: "New Ravi page",
      created_at: new Date(),
      image: "https://picsum.photos/id/237/200/300",
      description:"small description starts here"
    },
    {
      id:3,
      category:'sports',
      author:"Manjunath",
      title: "New home page",
      created_at: new Date(),
      image: "https://picsum.photos/seed/picsum/200/300",
      description:"small description starts here"
    },
    {
      id:4,
      category:'comic',
      author:"Ravi Desai",
      title: "New Ravi page",
      created_at: new Date(),
      image: "https://picsum.photos/id/237/200/300",
      description:"small description starts here"
    },
    {
      id:5,
      category:'general',
      author:"Manjunath",
      title: "New home page",
      created_at: new Date(),
      image: "https://picsum.photos/seed/picsum/200/300",
      description:"small description starts here"
    },
    {
      id:6,
      category:'music',
      author:"Ravi Desai",
      title: "New Ravi page",
      created_at: new Date(),
      image: "https://picsum.photos/id/237/200/300",
      description:"small description starts here"
    },
    {
      id:7,
      category:'zumba',
      author:"Manjunath",
      title: "New home page",
      created_at: new Date(),
      image: "https://picsum.photos/seed/picsum/200/300",
      description:"small description starts here"
    },
    {
      id:8,
      category:'technology',
      author:"Ravi Desai",
      title: "New Ravi page",
      created_at: new Date(),
      image: "https://picsum.photos/id/237/200/300",
      description:"small description starts here"
    }
];
  constructor() { 

  }

  getAllBooks(){
    return this.books;
  }
  getBooksById(id:number){
    return this.books.filter(book=>{
      return book.id == id;
    })
  }
  getBooksByTitle(title:string){
    return this.books.filter(book=>{
      return book.title == title;
    })
  }
  getBooksByCategory(category:string){
    return this.books.filter(book=>{
      return book.category == category;
    })
  }
  getAllBooksCategory(){
    return this.books.map(book=>{
      return book.category;
    })
  }



}
