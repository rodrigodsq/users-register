import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormModule),
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule),
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContainerRoutingModule
{ }
