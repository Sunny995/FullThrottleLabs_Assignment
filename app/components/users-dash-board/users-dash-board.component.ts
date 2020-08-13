import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersInformationService } from 'src/app/service/users-information.service';
import { IUsers } from 'src/app/Interfaces/IUsers';

@Component({
  selector: 'app-users-dash-board',
  templateUrl: './users-dash-board.component.html',
  styleUrls: ['./users-dash-board.component.scss']
})
export class UsersDashBoardComponent implements OnInit {

  Users = [];
  @Output() showActivitiesEvent = new EventEmitter<IUsers>();

  constructor(public service: UsersInformationService) {

  }

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(data => {
        data.forEach(v => {
          v.activity_periods.forEach(p => {
            p.day = new Date(p.day);
          });
        });
        this.Users = data;
      });

  }

  showActivations(user: any): void {
    this.showActivitiesEvent.emit(user);
  }
}
