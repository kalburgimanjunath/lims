import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin, animationFrameScheduler } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  closeResult = '';
  constructor(private http : HttpClient,private modalService: NgbModal) {

  }
  volumeInfo:Object[] =[];
  // categories =["Academic Life ",
  // "Alumni ",
  // "Arts ",
  // "Athletic",
  // "Award",
  // "Bates values ",
  // "Collaboration ",
  // "Creativity ",
  // "Diversity ",
  // "BatesNews ",
  // "BatesNews ",
  // "Civic engagement ",
  // "Current topics ",
  // "Health and medicine ",
  // "Humanities and history ",
  // "Justice and poverty ",
  // "Language and literature ",
  // "News and politics ",
  // "Science and technology ",
  // "Society and culture ",
  // "Teaching and education ",
  // "Events ",
  // "Annual events ",
  // "Exclude from Loops ",
  // "livestream ",
  // "Maine/world ",
  // "Lewiston-Auburn ",
  // "Maine and New England ",
  // "People and groups ",
  // "Faculty and staff ",
  // "Partners and public ",
  // "Service ",
  // "Slideshow ",
  // "Student Life ",
  // "The College "];
categories = ["angular","angularjs","angular interview","react","reactjs","react interview","es6","es6 interview",
"javascript","javascript interview","html5","html best practice","angular best practice","react best practice",
"angular design paterns","react design patterns"
]
  detailpage : boolean;
  details:any = [];
  page = 1;

  pageSize = 99;

  
  ngOnInit(): void {

    this.detailpage = false;
    let urlList:any = [];
    
    // const createURL = this.categories.map((item)=>{
    //   urlList.push(this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=974e87b6823540129bb34805433b92ad'));
    // })
    const createURL = this.categories.map((item)=>{
      //urlList.push(this.http.get('https://newsapi.org/v2/everything?q='+ item + '&apiKey=974e87b6823540129bb34805433b92ad'));
      urlList.push(this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=974e87b6823540129bb34805433b92ad'));
    })
   
    

    forkJoin(urlList)
    .subscribe(Response => {   
      Response.map((eacharray)=>{  
        console.log(eacharray['articles'][0]);
        eacharray['articles'].map((item)=>{
          let tempBook = [{
            "author" :  item.author,
            "title": item.title,
            "description": item.description,
            "image": item.urlToImage,
            "content":item.content
          }];
          
          this.volumeInfo.push(tempBook[0]);
        });
      });
    });

    console.log(this.volumeInfo);
  }

  filterArticle(title:string):any{
    return this.volumeInfo.map((item)=>{
      return item['articles'].title == title;
    })
  }

  selectedArticle(title:string):any{
    console.log(title);
    this.detailpage = true;

    this.details = {
      title: title,
      content: this.filterArticle(title)
    }
  }
  hideselectedArticle(title:string){
    this.detailpage = false;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
