import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn, TableRow } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input()
  rows: TableRow[] = [];

  @Input()
  columns: TableColumn[] = [];

  @Input()
  paginatorEnabled: boolean = true;

  @Output()
  onRowClicked: EventEmitter<TableRow> = new EventEmitter<TableRow>();

  rowClicked(rowData: TableRow) {
    this.onRowClicked.emit(rowData);
  }
}
