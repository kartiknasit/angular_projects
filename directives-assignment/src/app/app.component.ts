import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-assignment';
  showSecret = false;
  logs: number[] = [];
  dates: Date[] = [];

  displayText() {
    this.logs.push(this.logs.length + 1);
    this.dates.push(new Date());
  }

  resetLogItems() {
    this.logs = [];
    this.dates = [];
  }
}
