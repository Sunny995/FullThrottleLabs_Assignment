import { Component, OnInit, Input } from '@angular/core';
import { IUsers } from 'src/app/Interfaces/IUsers';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  @Input() selectedUser: IUsers;
  selectedUserInfo: IUsers;

  constructor() { }

  ngOnInit(): void {
    this.selectedUserInfo = JSON.parse(JSON.stringify(this.selectedUser));
  }

  showActivations(date: any): void {
    this.selectedUserInfo.activity_periods = [];

    this.selectedUser.activity_periods.forEach(p => {
      var same = p.day.getTime() === date.getTime();
      if (same === true) {
        this.selectedUserInfo.activity_periods.push(p);
      }
    });

  }
}
