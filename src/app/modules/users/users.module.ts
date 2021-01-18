import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
