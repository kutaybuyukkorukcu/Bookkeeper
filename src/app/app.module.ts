import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { HoverDirective } from './shared/hover.directive';
import { CounterPipe } from './shared/counter.pipe';
import { PriceCounterPipe } from './shared/priceCounter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    HoverDirective,
    CounterPipe,
    PriceCounterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
