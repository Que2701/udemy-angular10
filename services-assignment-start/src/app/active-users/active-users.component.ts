import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { UserStoreService } from '../userStoreService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [LoggingService]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userStoreService: UserStoreService, private loggingService: LoggingService){
  }

  onSetToInactive(id: number) {
    this.userStoreService.inactiveUsers.push(this.userStoreService.activeUsers[id]);
    this.userStoreService.activeUsers.splice(id, 1);
    this.loggingService.LogToConsole(this.userStoreService.trackStatusChangeActivity++);
  }

  ngOnInit(){
    this.users = this.userStoreService.activeUsers;
  }
}
