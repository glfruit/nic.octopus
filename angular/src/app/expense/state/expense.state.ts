import { ExpenseService } from './../services/expense.service';
import { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetExpenses } from './expense.actions';
import { ExpenseDto } from '../models';
import { tap } from 'rxjs/operators';

export class ExpenseStateModel {
  public expense: PagedResultDto<ExpenseDto>;
}

const defaults = {
  items: []
};

@State<ExpenseStateModel>({
  name: 'ExpenseState',
  defaults: { expense: {} } as ExpenseStateModel
})
@Injectable()
export class ExpenseState {

  @Selector()
  static getExpenses(model: ExpenseStateModel) {
    return model.expense.items || [];
  }

  constructor(private expenseService: ExpenseService) {}

  @Action(GetExpenses)
  get(ctx: StateContext<ExpenseStateModel>) {
    return this.expenseService.getListByInput().pipe(
      tap((expensesResponse) => {
        ctx.patchState({
          expense: expensesResponse,
        });
      })
    );
  }
}
