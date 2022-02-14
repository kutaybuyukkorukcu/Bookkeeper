import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'bookkeeper';

  number: any = 4;

  titles: Array<string> = ['angular', 'react', 'vue'];
  
  constructor(public cartService: CartService) {}

  sum(x: number, y: number): number {

    return x + y;
  }
}