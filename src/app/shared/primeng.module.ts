import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    CardModule,
    ButtonModule,
    KeyFilterModule,
    InputTextModule,
    InputNumberModule,
    ToastModule,
    BlockUIModule,
    PanelModule,
    MultiSelectModule,
    DividerModule,
    MenubarModule,
    AccordionModule,
    PanelMenuModule,
    TooltipModule,
    ConfirmDialogModule,
    CheckboxModule,
    PasswordModule,
    InputTextareaModule,
    RippleModule,
    DialogModule,
    DynamicDialogModule,
    ToggleButtonModule,
    ChartModule,
    CalendarModule,
    FloatLabelModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  exports: [
    TableModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    CardModule,
    ButtonModule,
    KeyFilterModule,
    InputTextModule,
    InputNumberModule,
    ToastModule,
    BlockUIModule,
    PanelModule,
    MultiSelectModule,
    DividerModule,
    MenubarModule,
    AccordionModule,
    PanelMenuModule,
    TooltipModule,
    ConfirmDialogModule,
    CheckboxModule,
    PasswordModule,
    InputTextareaModule,
    RippleModule,
    DialogModule,
    DynamicDialogModule,
    ToggleButtonModule,
    ChartModule,
    CalendarModule,
    FloatLabelModule,
  ],
})
export class PrimeNgModule {}
