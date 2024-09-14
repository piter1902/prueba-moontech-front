import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConnectionsComponent } from './components/list-connections/list-connections.component';

const routes: Routes = [
  {
    path: '',
    component: ListConnectionsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionsRoutingModule { }
