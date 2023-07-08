import { Component } from '@angular/core';

declare const myTest: any;

// decorator component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular tutorial';
  // date = Date.now()

  onClick() {
    myTest();
  }
}

