import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [ListUsersComponent, DetailUserComponent],
  providers: [UsersService],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    SharedModule,
  ],
})
export class UsersModule {}
