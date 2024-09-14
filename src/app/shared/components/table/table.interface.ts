export interface TableColumn {
  field: string;
  header: string;
}

export interface TableRow {
  [id: string]: string | boolean | number;
}
