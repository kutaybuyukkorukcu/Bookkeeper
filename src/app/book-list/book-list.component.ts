import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Books } from '../model/book.model';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  defaultQuery: Books.BookRequest = {
    maxResults: '4',
    orderBy: 'relevance',
    q: 'angular'
  };

  books!: Array<Books.BookDetail>;
  simpleBooks!: Array<Books.SimpleBookDetail>;

  constructor(public bookService: BookService, public cartService: CartService) { }

  ngOnInit(): void {

    this.bookService.getBooks(this.defaultQuery)
      .subscribe((books) => {
        this.simpleBooks = this.buildSimpleBookDetail(books);
        console.log(this.simpleBooks);
      })
  }

  ngOnDestroy(): void {
  }

  public buildSimpleBookDetail(books: Array<Books.BookDetail>): Array<Books.SimpleBookDetail> {

    let simpleBooks: Array<Books.SimpleBookDetail> = [];

    books.forEach((book: Books.BookDetail) => {
      simpleBooks = [
        ...simpleBooks,
        {
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          publishedDate: book.volumeInfo.publishedDate,
          thumbnail: book.volumeInfo?.imageLinks?.thumbnail || '',
          price: book.saleInfo?.retailPrice?.amount || 100
        }
      ]
    });

    return simpleBooks;
  }

  public onChange() {
    console.log(this.defaultQuery.q)

    this.bookService.getBooks(this.defaultQuery)
    .subscribe((books) => {
      this.simpleBooks = this.buildSimpleBookDetail(books);
      console.log(this.simpleBooks);
    })
  }

  addBookToCart(book: Books.SimpleBookDetail) {
    
    this.cartService.addBookToCart(book);
  }
}
