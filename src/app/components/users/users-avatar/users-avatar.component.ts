import { Component, OnInit, Input } from '@angular/core';
import {Users} from '../../users';
@Component({
  selector: 'app-users-avatar',
  templateUrl: './users-avatar.component.html',
  styleUrls: ['./users-avatar.component.scss']
})
export class UsersAvatarComponent implements OnInit {
  
  constructor() { }
  @Input() user:Users;

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(this.user);
    
  }

}
