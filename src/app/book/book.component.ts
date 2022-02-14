import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Books } from '../model/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() bookTitle!: string;
  @Input() authorName!: string;
  @Input() imgSrc!: string;
  @Input() book!: Books.SimpleBookDetail;

  @Output() addToCartEvent = new EventEmitter<Books.SimpleBookDetail>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  addToCart(book: Books.SimpleBookDetail) {
    this.addToCartEvent.emit(book);
  }

}
