import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastOptions } from '../models/toast-options.model';
import { constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  // Severity Types
  private severity = {
    success: 'success',
    info: 'info',
    warn: 'warn',
    error: 'error',
  };

  private toastDuration: number = constants.toastDuration; // in seconds

  public add(
    severity: 'success' | 'info' | 'warn' | 'error',
    title: string,
    content?: string,
    options?: ToastOptions
  ) {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: content,
      life: this.toastDuration,
      sticky: options?.isSticky,
      icon: options?.icon,
      closable: options?.closeable,
      closeIcon: options?.closeIcon,
    });
  }

  public addSuccess(title: string, content?: string, options?: ToastOptions) {
    this.messageService.add({
      severity: this.severity.success,
      summary: title,
      detail: content,
      life: this.toastDuration,
      sticky: options?.isSticky,
      icon: options?.icon,
      closable: options?.closeable,
      closeIcon: options?.closeIcon,
    });
  }

  public addInfo(title: string, content?: string, options?: ToastOptions) {
    this.messageService.add({
      severity: this.severity.info,
      summary: title,
      detail: content,
      life: this.toastDuration,
      sticky: options?.isSticky,
      icon: options?.icon,
      closable: options?.closeable,
      closeIcon: options?.closeIcon,
    });
  }

  public addWarn(title: string, content?: string, options?: ToastOptions) {
    this.messageService.add({
      severity: this.severity.warn,
      summary: title,
      detail: content,
      life: this.toastDuration,
      sticky: options?.isSticky,
      icon: options?.icon,
      closable: options?.closeable,
      closeIcon: options?.closeIcon,
    });
  }

  public addError(title: string, content?: string, options?: ToastOptions) {
    this.messageService.add({
      severity: this.severity.error,
      summary: title,
      detail: content,
      life: this.toastDuration,
      sticky: options?.isSticky,
      icon: options?.icon,
      closable: options?.closeable,
      closeIcon: options?.closeIcon,
    });
  }

  public clear() {
    this.messageService.clear();
  }
}
