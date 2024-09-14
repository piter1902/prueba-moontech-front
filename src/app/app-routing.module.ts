import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users-routing.module').then((m) => m.UsersRoutingModule),
  },
  {
    path: 'connections',
    loadChildren: () =>
      import('./connections/connections-routing.module').then(
        (m) => m.ConnectionsRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: '/users/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
