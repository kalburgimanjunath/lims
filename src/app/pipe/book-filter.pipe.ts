import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../components/books';
@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(BookObj: any,searchTxt:string='',inputTags:any): any {
    console.log(inputTags);
    let searchedItems = BookObj.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key]).toLowerCase().indexOf(searchTxt.toLowerCase()) > -1;
      })
    });
    // let searchedItems = BookObj.filter((item) => {
    //   return (item.title.toLowerCase() == searchTxt.toLowerCase() 
    //   && 
    //   item.category == String(inputTags.filter((categoryitem)=>{
    //     return String(item.category == categoryitem)
    //   })));
    // });
    console.log(searchedItems);
    return searchedItems;

    //return null;
  }

}
