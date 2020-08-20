import { Component, OnInit } from '@angular/core';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { Users } from '../users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users: Users[];

  ngOnInit(): void {
    this.users=[
    {
      id:1,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:2,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:3,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:2,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:4,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:5,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:6,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:7,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:8,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:9,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:10,
      firstname:'manjunath',
      lastname:'kalburgi',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    },
    {
      id:11,
      firstname:'Mahesh',
      lastname:'Lingapp',
      address:{
        street:'btn 2nd stage',
        pincode:583838,
        homephone:2872876828
      },
      mobile:3838838383,
      image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    }

  ];
  }

}
