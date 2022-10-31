import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUsers } from './models/users.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{

  public sub: Subscription = new Subscription();
  public baseUsers: Array<IUsers> = [];

  constructor(private readonly usersService: UsersService)
  {}

  public ngOnInit(): void
  {
    if(localStorage.getItem('users'))
    {
      this.baseUsers.push(...JSON.parse(localStorage.getItem('users') || ''));
    }

    this.sub = this.usersService.getUsers().subscribe(value =>
    {
      value?.forEach(data =>
      {
        if(this.baseUsers.find(user => user.cpf === data.cpf))
        {
          return;
        }
        this.baseUsers.push(data);
      });

      localStorage.setItem('users', JSON.stringify(this.baseUsers));
    })
  }

  public ngOnDestroy(): void
  {
    this.sub?.unsubscribe();
  }
}
