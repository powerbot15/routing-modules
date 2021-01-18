import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UserListComponent, canActivate: [AuthGuard]},
  { path: ':id', component: UserComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
