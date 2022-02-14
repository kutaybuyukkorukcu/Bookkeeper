import { Pipe, PipeTransform } from "@angular/core";
import { Books } from "../model/book.model";

@Pipe({
    name: 'priceCounter'
})
export class PriceCounterPipe implements PipeTransform {

    transform(books: Array<Books.SimpleBookDetail>) {
        return books.reduce((acc, curr) => { return acc + curr.price }, 0);
    }

}
