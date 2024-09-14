import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users-routing.module').then(
            (m) => m.UsersRoutingModule
          ),
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
        redirectTo: '/users/list'
      }
    ],
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
