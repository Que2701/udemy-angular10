import { Component, OnInit } from '@angular/core';
import { UserStoreService } from './userStoreService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserStoreService]
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userStoreService: UserStoreService){

  }

  onSetToInactive(id: number) {
    this.userStoreService.inactiveUsers.push(this.userStoreService.activeUsers[id]);
    this.userStoreService.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.userStoreService.activeUsers.push(this.userStoreService.inactiveUsers[id]);
    this.userStoreService.inactiveUsers.splice(id, 1);
  }

  ngOnInit(){
    this.activeUsers = this.userStoreService.activeUsers;
    this.inactiveUsers = this.userStoreService.inactiveUsers;
  }
}
