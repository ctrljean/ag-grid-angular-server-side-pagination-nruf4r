import { Component } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { RemoteGridApi } from './remote-grid-api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements RemoteGridApi {
  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 }
  ];

  gridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 17,
    paginationPageSize: 17
  };

  gridApi: GridApi;
  remoteGridBinding = this;

  onGridReady(params) {
    this.gridApi = params.api;
  }

  getData(params): Observable<{ data; totalRecords }> {
    return of({ data: this.rowData, totalRecords: 85 });
  }
}
