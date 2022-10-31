import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../models/users.model';

@Injectable()
export class UsersService
{

  constructor(private readonly http: HttpClient)
    { }

  public getUsers(): Observable<Array<IUsers>>
  {
    return this.http.get<Array<IUsers>>('https://private-9d65b3-tinnova.apiary-mock.com/users')
  }
}
