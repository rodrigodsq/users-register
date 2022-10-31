import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  constructor(private readonly usersService: UsersService)
  {}

  public ngOnInit(): void
  {
    this.usersService.getUsers().subscribe(value =>
    {
      console.log(value);
    })
  }

}
