import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ComponentsModule
  ]
})
export class UserFormModule { }
