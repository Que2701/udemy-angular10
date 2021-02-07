import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  constructor(){

  }

  onIntervalEventFired(intervalNumberValue: number){
    if (intervalNumberValue % 2 === 0){
      this.evenNumbers.push(intervalNumberValue);
    }else{
      this.oddNumbers.push(intervalNumberValue);
    }
  }
}
