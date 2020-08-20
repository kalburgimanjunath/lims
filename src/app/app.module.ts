import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksGridComponent } from './components/books-grid/books-grid.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { UsersComponent } from './components/users/users.component';
import { BooksComponent } from './components/books/books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BookFilterPipe } from './pipe/book-filter.pipe';
import { InputTagsComponent } from './components/input-tags/input-tags.component';
import { BookOverseasComponent } from './components/book-overseas/book-overseas.component';
import { BooksAddComponent } from './components/books/books-add/books-add.component';
import { BooksEditComponent } from './components/books/books-edit/books-edit.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersAvatarComponent } from './components/users/users-avatar/users-avatar.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    BooksListComponent,
    BooksGridComponent,
    BookDetailComponent,
    BookCategoryComponent,
    UsersComponent,
    BooksComponent,
    SignupComponent,
    SearchComponent,
    BookFilterPipe,
    InputTagsComponent,
    BookOverseasComponent,
    BooksAddComponent,
    BooksEditComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersAvatarComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    NgbPaginationModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
