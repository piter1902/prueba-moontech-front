import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getUserFormGroup } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { SubSink } from 'subsink';
import { mergeMap, of } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from '../../../shared/services/toast.service';
import { CreateUser } from '../../models/create-user.model';
import { UpdateUser } from '../../models/update-user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss',
})
export class DetailUserComponent implements OnInit, OnDestroy {
  private subs: SubSink = new SubSink();

  id: string = '';
  isNew: boolean = true;

  userFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.route.params
      .pipe(
        mergeMap((params) => {
          // Get id from route
          this.id = params['id'];

          this.isNew = this.id == null || this.id == 'new';
          if (this.isNew) {
            return of(undefined);
          } else {
            return this.userService.getUserById(this.id);
          }
        })
      )
      .subscribe((user) => {
        this.userFormGroup = getUserFormGroup(user);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onDelete() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar el usuario?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.subs.sink = this.userService
          .deleteUserById(this.id)
          .subscribe(() => {
            this.toastService.addSuccess('Usuario eliminado', undefined, {
              closeable: true,
            });

            this.returnToList();
          });
      },
      reject: () => {},
    });
  }

  onBack() {
    this.returnToList();
  }

  private returnToList() {
    this.router.navigate(['users', 'list']);
  }

  onSave() {
    if (this.userFormGroup.valid) {
      let value = this.userFormGroup.value;
      console.log(value);

      // Encode password in base64
      if (value.password) {
        value.password = btoa(value.password);
      }

      if (this.isNew) {
        // Create new user
        value = value as CreateUser;
        this.subs.sink = this.userService.createUser(value).subscribe(() => {
          this.toastService.addSuccess('Usuario creado', undefined, {
            closeable: true,
          });

          this.returnToList();
        });
      } else {
        // Update user
        value = value as UpdateUser;

        this.subs.sink = this.userService
          .updateUser(this.id, value)
          .subscribe(() => {
            this.toastService.addSuccess('Usuario modificado', undefined, {
              closeable: true,
            });

            this.returnToList();
          });
      }
    }
  }
}
