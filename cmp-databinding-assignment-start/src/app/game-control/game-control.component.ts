import { Component, EventEmitter, Output } from  '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: 'game-control.component.html',
    styleUrls: ['game-control.component.css']
})
export class GameControlComponent{
    interval: ReturnType<typeof setTimeout> = null;
    incrementingNumberValue: number = 0;
    @Output() intervalEventFired: EventEmitter<number> = new EventEmitter<number>();
    
    constructor(){

    }

    onStartGame(){
        this.interval = setInterval(() => {
            this.incrementingNumberValue += 1;
            this.intervalEventFired.emit(this.incrementingNumberValue);
            console.log('Value: ' + this.incrementingNumberValue );
        },1000)
    }

    onGameStop(){
        clearInterval(this.interval);
    }
}