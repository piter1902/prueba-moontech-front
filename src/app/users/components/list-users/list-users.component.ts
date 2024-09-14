import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  TableColumn,
  TableRow,
} from '../../../shared/components/table/table.interface';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { SubSink } from 'subsink';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent implements OnInit, OnDestroy {
  subs: SubSink = new SubSink();

  cols: TableColumn[] = [
    { field: 'name', header: 'Nombre de usuario' },
    { field: 'email', header: 'Email' },
    { field: 'active', header: 'Activo' },
  ];

  rows: TableRow[] = [];

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.subs.sink = this.usersService
      .getAllUsers()
      .subscribe((users) => this.renderRows(users));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private renderRows(users: User[]) {
    this.rows = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      active: u.active ? 'Sí' : 'No',
    }));
  }

  openDetail(row: TableRow) {
    this.router.navigate(['users', row['id']]);
  }

  onCreateUser() {
    this.router.navigate(['users', 'new']);
  }
}
