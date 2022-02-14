import { Pipe, PipeTransform } from "@angular/core";
import { Books } from "../model/book.model";

@Pipe({
    name: 'counter',
    pure: true
})
export class CounterPipe implements PipeTransform {

    transform(books: Array<Books.SimpleBookDetail>) {

        if (books != null) {
            return books.length;
        }

        return 0;
    }

}
