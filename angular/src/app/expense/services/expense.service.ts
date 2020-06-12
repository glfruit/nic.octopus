import { RestService , PagedAndSortedResultRequestDto, PagedResultDto} from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ExpenseDto, CreateUpdateExpenseDto} from '../models';

@Injectable({providedIn: 'root'})
export class ExpenseService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 getById(id: string): Observable<ExpenseDto> {
   return this.restService.request({ url: `/api/app/expense/${id}`, method: 'GET' },{ apiName: this.apiName });
 }
 getListByInput(params = {} as PagedAndSortedResultRequestDto): Observable<PagedResultDto<ExpenseDto>> {
   return this.restService.request({ url: '/api/app/expense', method: 'GET', params },{ apiName: this.apiName });
 }
 createByInput(body: CreateUpdateExpenseDto): Observable<ExpenseDto> {
   return this.restService.request({ url: '/api/app/expense', method: 'POST', body },{ apiName: this.apiName });
 }
 updateByIdAndInput(body: CreateUpdateExpenseDto, id: string): Observable<ExpenseDto> {
   return this.restService.request({ url: `/api/app/expense/${id}`, method: 'PUT', body },{ apiName: this.apiName });
 }
 deleteById(id: string): Observable<void> {
   return this.restService.request({ url: `/api/app/expense/${id}`, method: 'DELETE' },{ apiName: this.apiName });
 }
}
