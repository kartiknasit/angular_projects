import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-way-data-binding-demo';
  username = '';

  updateUserName(e : Event) {
    if(e instanceof EventTarget) {
      console.log(e.target);
    }
  }
}
