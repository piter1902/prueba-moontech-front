import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ListConnectionsComponent } from './components/list-connections/list-connections.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListConnectionsComponent
  ],
  imports: [
    CommonModule,
    ConnectionsRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class ConnectionsModule { }
