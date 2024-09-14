import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  getUserLoginFormGroup,
  LoginUserRequest,
} from '../../models/login-user.request';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs: SubSink = new SubSink();

  loginUserFormGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginUserFormGroup = getUserLoginFormGroup();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onLogin() {
    if (this.loginUserFormGroup.valid) {
      let value = this.loginUserFormGroup.value as LoginUserRequest;

      value.password = btoa(value.password);

      this.subs.sink = this.authService.loginUser(value).subscribe(() => {
        // Go to main page
        this.router.navigate(['users', 'list']);
      });
    }
  }
}
