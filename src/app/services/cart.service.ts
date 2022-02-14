import { Injectable } from "@angular/core";
import { Books } from "../model/book.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {}

    public cart: Array<Books.SimpleBookDetail> = [];

    addBookToCart(book: Books.SimpleBookDetail): void {

        this.cart = !this.cart.filter(item => item.id == book.id).shift()
        ? [
            ...this.cart,
            book
        ] : this.cart;
    }
}