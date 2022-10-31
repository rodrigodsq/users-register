import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  public baseUsers: Array<IUsers> = [];

  public ngOnInit(): void
  {
    if(localStorage.getItem('users'))
    {
      this.baseUsers.push(...JSON.parse(localStorage.getItem('users') || ''));
    }
  }

}
