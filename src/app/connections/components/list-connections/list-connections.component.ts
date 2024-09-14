import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  TableColumn,
  TableRow,
} from '../../../shared/components/table/table.interface';
import { SubSink } from 'subsink';
import { of } from 'rxjs';
import { ConnectionLogService } from '../../services/connection-log.service';
import { ConnectionLog } from '../../models/connection-log.interface';
import { format } from 'date-fns';

@Component({
  selector: 'app-list-connections',
  templateUrl: './list-connections.component.html',
  styleUrl: './list-connections.component.scss',
})
export class ListConnectionsComponent implements OnInit, OnDestroy {
  private subs: SubSink = new SubSink();

  columns: TableColumn[] = [
    {
      field: 'date',
      header: 'Fecha',
    },
    {
      field: 'user',
      header: 'Usuario',
    },
    {
      field: 'event',
      header: 'Evento',
    },
  ];

  rows: TableRow[] = [];

  constructor(private connectionLogService: ConnectionLogService) {}

  ngOnInit(): void {
    this.subs.sink = this.connectionLogService
      .getAllConnections()
      .subscribe((conn) => this.renderRows(conn));
  }

  private renderRows(connections: ConnectionLog[]) {
    this.rows = connections.map((conn) => ({
      date: format(conn.date, "dd-MM-yyyy HH:mm"),
      user: conn.user.email,
      event: conn.isLogin ? 'Login' : 'Logout',
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
