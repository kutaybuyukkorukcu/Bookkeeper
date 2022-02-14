import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Books } from "../model/book.model";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(public http: HttpClient) {}

    public getBooks(bookRequest: Books.BookRequest): Observable<Array<Books.BookDetail>> {

        const url = environment.api + `?maxResults=${bookRequest.maxResults}&orderBy=${bookRequest.orderBy}&q=${bookRequest.q}`;
    
        return this.http.get(url)
          .pipe(
            map((response: any) => response.items)
          );
      }
}