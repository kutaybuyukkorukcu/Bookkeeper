import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Books } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  defaultQuery: Books.BookRequest = {
    maxResults: '20',
    orderBy: 'relevance',
    q: 'angular'
  };

  books!: Array<Books.BookDetail>;
  simpleBooks!: Array<Books.SimpleBookDetail>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.getBooks(this.defaultQuery)
      .subscribe((books) => {
        this.simpleBooks = this.buildSimpleBookDetail(books);
        console.log(this.simpleBooks);
      })
  }

  ngOnDestroy(): void {
  }

  public getBooks(bookRequest: Books.BookRequest): Observable<Array<Books.BookDetail>> {

    const url = `https://www.googleapis.com/books/v1/volumes?maxResults=${bookRequest.maxResults}&orderBy=${bookRequest.orderBy}&q=${bookRequest.q}`;

    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
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

    this.getBooks(this.defaultQuery)
    .subscribe((books) => {
      this.simpleBooks = this.buildSimpleBookDetail(books);
      console.log(this.simpleBooks);
    })
  }
}
