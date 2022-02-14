import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stubSimpleBookDetail } from '../model/book.stub';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign bookTitle value "ANGULARJS"', () => {
    component.bookTitle = 'ANGULARJS';
    fixture.detectChanges();
    expect(component.bookTitle).toEqual('ANGULARJS');
  }) 

  it('should assign authorName value "ŞERİF AYDIN"', () => {
    component.authorName = 'ŞERİF AYDIN';
    fixture.detectChanges();
    expect(component.authorName).toEqual('ŞERİF AYDIN');
  }) 

  it('should emit on click', () => {
    component.book = stubSimpleBookDetail;
    fixture.detectChanges();
    
    spyOn(component.addToCartEvent, 'emit').and.callThrough();

    const addToCartButton = (fixture.nativeElement as HTMLElement).querySelectorAll('p').item(1);
    addToCartButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.addToCartEvent.emit).toHaveBeenCalled();
    expect(component.addToCartEvent.emit).toHaveBeenCalledWith(stubSimpleBookDetail);
  })
});
