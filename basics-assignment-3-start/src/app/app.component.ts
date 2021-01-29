import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  displayButtonClicks = [0];
  displayButtonClicksCounter = 0;

  constructor(){

  }

  DisplaySettingsClick(){
    this.displayText = true;
    this.displayButtonClicksCounter += 1;
    this.displayButtonClicks.push(this.displayButtonClicksCounter);
  }
}
