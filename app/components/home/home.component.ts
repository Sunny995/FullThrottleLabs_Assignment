import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/Interfaces/IUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showActivity = false;
  selectedUser: IUsers;

  constructor() { }

  ngOnInit(): void {
  }


  showUserActivations(user: any): void {
    this.selectedUser = user;
    this.showActivity = true;
  }
}
