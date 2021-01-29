import { Component } from "@angular/core";

@Component({
    selector: 'app-ui-input',
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.css']
})

export class UiComponent{
    userName = 'Unknown';
    userNameStatusUpdate = '';
    isUsernameEmpty;

    constructor(){
        this.isUsernameEmpty =  true;
    }

    updateInputValue(){
        if (this.userName == ''){
            this.isUsernameEmpty = false;
        }else{
            this.isUsernameEmpty = true;
        }
    }

    updateUserName(){
        this.userName = '';
        if (this.userName == ''){
            this.isUsernameEmpty = false;
        }
    }
}