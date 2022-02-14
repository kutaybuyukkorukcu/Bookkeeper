import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { stubBookDetail, stubBookRequest, stubSimpleBookDetail } from '../model/book.stub';
import { of } from 'rxjs';


describe('BookService', () => {

    let service: BookService;
    let httpRequest: HttpTestingController;
    let bookServiceSpy: jasmine.SpyObj<BookService>;

    beforeEach(async () => {

        bookServiceSpy = jasmine.createSpyObj('bookService', ['getBooks']);

        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [],
            providers: [
                BookService
            ]
        });

        service = TestBed.inject(BookService);
        httpRequest = TestBed.inject(HttpTestingController);
    });

    it('should respond successfully', (done: DoneFn) => {

        bookServiceSpy.getBooks.and.returnValue(of([stubBookDetail]));

        bookServiceSpy.getBooks(stubBookRequest)
            .subscribe((books) => {
                expect(books).toEqual([stubBookDetail]);
                done();
            })

        httpRequest.match('https://www.googleapis.com/books/v1/volumes' + `?maxResults=${stubBookRequest.maxResults}&orderBy=${stubBookRequest.orderBy}&q=${stubBookRequest.q}`)
        httpRequest.verify();
    });

});
