import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUsersComponent,
  },
  {
    path: ':id',
    component: DetailUserComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
