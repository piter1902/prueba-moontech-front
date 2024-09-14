import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
}

export const getUserFormGroup = (user?: User) => {
  return new FormGroup({
    name: new FormControl(user?.name, [Validators.required]),
    email: new FormControl(user?.email, [
      Validators.required,
      Validators.email,
    ]),
    active: new FormControl(user?.active ?? true, [Validators.required]),
    password: new FormControl(''),
  });
};
