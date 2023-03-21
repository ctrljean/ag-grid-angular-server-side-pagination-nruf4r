import { Component } from '@angular/core';
import { GridApi, PaginationChangedEvent } from 'ag-grid-community';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ResponseBackend, Datum } from './backend';
import { RemoteGridApi } from './remote-grid-api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements RemoteGridApi {
  columnDefs = [
    { field: 'id' },
    { field: 'first_name' },
    { field: 'last_name' },
    { field: 'avatar' },
    { field: 'email' },
  ];

  rowData = [];
  page = 1;

  gridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 6,
    paginationPageSize: 6,
  };

  gridApi: GridApi;
  remoteGridBinding = this;

  onGridReady(params) {
    this.gridApi = params.api;
  }

  getData(params): Observable<{ data; totalRecords }> {
    const url = `https://reqres.in/api/users?page=${this.page}`;
    let perPage: number;
    let totalPages: number;
    let total: number;

    return ajax.getJSON<ResponseBackend>(url).pipe(
      map<ResponseBackend, any>((response) => {
        perPage = response.per_page;
        totalPages = response.total_pages;
        total = response.total;
        return { data: response.data, totalRecords: response.total };
      })
    );
  }

  changedPagination(event: PaginationChangedEvent) {
    if (event.newPage) {
      this.page = event.api.paginationGetCurrentPage() + 1; //tengo la pagínación aquí
      this.getData(null);
    }
  }
}
