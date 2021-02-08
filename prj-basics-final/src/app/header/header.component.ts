import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  showRecipes: boolean = false;
  @Output() showClickedNavMenuEventFired: EventEmitter<boolean> = new EventEmitter<boolean>();

  onNavMenuClicked(navMenu: string){
    if(navMenu === 'Recipes'){
      this.showRecipes = true;
    }else{
      this.showRecipes = false;
    }
    this.showClickedNavMenuEventFired.emit(this.showRecipes);
  }
}
