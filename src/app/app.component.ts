import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  navigationItems: MenuItem[] = [
    {
      label: 'Gestión de usuarios',
      icon: PrimeIcons.USERS,
      routerLink: "/users/list"
    },
    {
      label: 'Log de conexiones',
      icon: PrimeIcons.GLOBE,
      routerLink: "/connections"
    },
  ]

}
