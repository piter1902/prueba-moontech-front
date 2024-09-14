import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  getUserLoginFormGroup,
  LoginUserRequest,
} from '../../models/login-user.request';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { constants } from '../../../shared/constants/constants';

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

    const email = localStorage.getItem(constants.localStorage.rememberEmailKey);
    if (email) {
      this.loginUserFormGroup.controls['email'].setValue(email);
    }

    const remember = localStorage.getItem(constants.localStorage.rememberMeKey);
    if (remember) {
      this.loginUserFormGroup.controls['rememberme'].setValue(
        remember == 'true'
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onLogin() {
    if (this.loginUserFormGroup.valid) {
      let value = this.loginUserFormGroup.value;

      const remember = value.rememberme;

      delete value.rememberme;

      value = value as LoginUserRequest;

      value.password = btoa(value.password);

      this.subs.sink = this.authService.loginUser(value).subscribe(() => {
        if (remember) {
          localStorage.setItem(
            constants.localStorage.rememberEmailKey,
            value.email
          );
          localStorage.setItem(constants.localStorage.rememberMeKey, remember);
        } else {
          localStorage.removeItem(constants.localStorage.rememberEmailKey);
          localStorage.removeItem(constants.localStorage.rememberMeKey);
        }

        // Go to main page
        this.router.navigate(['users', 'list']);
      });
    }
  }

  onRecoverPassword() {
    alert('Funcionalidad no implementada');
  }
}
