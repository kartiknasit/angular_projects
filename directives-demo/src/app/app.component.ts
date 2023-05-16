import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    .online {
      color: green;
    }
  `]
})
export class AppComponent {
  title: string = 'directives-demo';
  textValue: string = '';
  isNameKartik: boolean = false;
  isButtonEnabled: boolean = true;
  name: string = '';
  names: string[] = ['KT','KP'];

  isKartik() {
    this.isNameKartik = this.textValue === 'KARTIK' ? true : false;
    return this.textValue === 'KT';
  }

  constructor() {
    this.isButtonEnabled = Math.random() > 0.5 ? true : false;
  }

  getColor() {
    return this.isButtonEnabled ? 'green' : 'red';
  }

  addName() {
    this.names.push(this.name);
  }
}
