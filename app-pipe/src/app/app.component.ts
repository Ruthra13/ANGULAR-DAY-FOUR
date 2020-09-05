import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-pipe';
  currentDate: number = Date.now();
  num: number = 100;
  cur: number = 100;
  str: string = 'Angular 8.0 is a Component Based Framework';
  per: number = 100;
}
