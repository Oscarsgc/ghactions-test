import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;

  constructor() {
    const sampleTitle = "Aloha"
    this.title = 'Hello world' + sampleTitle;
  }
}
