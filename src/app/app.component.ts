import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'bookkeeper';

  number: any = 4;

  titles: Array<string> = ['angular', 'react', 'vue'];
  
  sum(x: number, y: number): number {

    return x + y;
  }
}