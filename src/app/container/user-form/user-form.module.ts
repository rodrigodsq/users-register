import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class UserFormModule { }
