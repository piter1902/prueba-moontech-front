import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PrimeNgModule } from './primeng.module';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [TableComponent],
  providers: [ToastService],
  exports: [TableComponent],
})
export class SharedModule {}
