import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UsersService } from './users.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class ServiceModule { }
