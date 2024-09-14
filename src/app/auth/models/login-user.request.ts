import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginUserRequest {
  email: string;
  password: string;
}

export const getUserLoginFormGroup = () => {
  return new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberme: new FormControl(false, [Validators.required])
  });
};
