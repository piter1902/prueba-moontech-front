import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { UsersService } from './users/services/users.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit, OnDestroy {
  private subs: SubSink = new SubSink();

  navigationItems: MenuItem[] = [
    {
      label: 'Gestión de usuarios',
      icon: PrimeIcons.USERS,
      routerLink: '/users/list',
    },
    {
      label: 'Log de conexiones',
      icon: PrimeIcons.GLOBE,
      routerLink: '/connections',
    },
  ];

  username: string = '';

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.userService.getCurrentUser().subscribe((u) => {
      this.username = u.name;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout() {
    this.subs.sink = this.authService.logoutUser().subscribe(() => {
      this.router.navigate(['auth', 'login']);
    });
  }
}
