import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title:string = 'hello manju';  
  navlist: any = [
    'home',
    'aboutus',
    'books',
    'list',
    'grid',
    'dashboard',
    'login'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
