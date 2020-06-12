import { GetExpenses } from './../state/expense.actions';
import { Select, Store } from '@ngxs/store';
import { ExpenseType } from './../models/expense-type';
import { Observable } from 'rxjs';
import { ExpenseState } from './../state/expense.state';
import { Component, OnInit } from '@angular/core';
import { ExpenseDto } from '../models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  @Select(ExpenseState.getExpenses)
  expenses$: Observable<ExpenseDto[]>;

  expensesType = ExpenseType;

  loading = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;
    this.store.dispatch(new GetExpenses())
    .pipe(finalize(() => (this.loading = false)))
    .subscribe(() => {});
  }
}
