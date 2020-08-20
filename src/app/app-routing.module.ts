import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {AppComponent} from './app.component'
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksGridComponent } from './components/books-grid/books-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent} from './pages/aboutus/aboutus.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { BookOverseasComponent } from './components/book-overseas/book-overseas.component';
import { UsersComponent } from './components/users/users.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { BooksAddComponent } from './components/books/books-add/books-add.component';
import { BooksEditComponent } from './components/books/books-edit/books-edit.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'books',component:BookCategoryComponent},
  {path:'books/add',component:BooksAddComponent},
  {path:'books/edit/:id',component:BooksEditComponent},
  {path:'list',component:BooksListComponent},
  {path:'grid',component:BooksGridComponent},
  {path:'search',component:SearchComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'bookdetail/:id',component:BookDetailComponent},
  {path:'oversees',component:BookOverseasComponent},
  {path:'news',component:NewsComponent},
  {path:'users',component:UsersComponent},
  {path:'users/add',component:UsersAddComponent},
  {path:'users/edit/:id',component:UsersEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
