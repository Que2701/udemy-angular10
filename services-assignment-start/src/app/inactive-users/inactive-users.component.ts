import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { UserStoreService } from '../userStoreService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [LoggingService]
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userStoreService: UserStoreService, private loggingService: LoggingService){

  }

  onSetToActive(id: number) {
    this.userStoreService.activeUsers.push(this.userStoreService.inactiveUsers[id]);
    this.userStoreService.inactiveUsers.splice(id, 1);
    this.loggingService.LogToConsole(this.userStoreService.trackStatusChangeActivity++);
  }

  ngOnInit(){
    this.users = this.userStoreService.inactiveUsers;
  }
}
