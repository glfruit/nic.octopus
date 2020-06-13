import { ExpenseService } from './../services/expense.service';
import { GetExpenses, CreateUpdateExpense, DeleteExpense } from './../state/expense.actions';
import { Select, Store } from '@ngxs/store';
import { ExpenseType } from './../models/expense-type';
import { Observable } from 'rxjs';
import { ExpenseState } from './../state/expense.state';
import { Component, OnInit } from '@angular/core';
import { ExpenseDto } from '../models';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
})
export class ExpenseListComponent implements OnInit {

  @Select(ExpenseState.getExpenses)
  expenses$: Observable<ExpenseDto[]>;

  expensesType = ExpenseType;

  expenseTypeArr = Object.keys(ExpenseType).filter(
    (expenseType) => typeof this.expensesType[expenseType] === 'number'
  )

  loading = false;

  isModalOpen = false;

  form: FormGroup;

  selectedExpense = {} as ExpenseDto;

  constructor(
    private store: Store, 
    private fb: FormBuilder, 
    private expenseService: ExpenseService, 
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;
    this.store.dispatch(new GetExpenses())
    .pipe(finalize(() => (this.loading = false)))
    .subscribe(() => {});
  }

  createExpense() {
    this.selectedExpense = {} as ExpenseDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editExpense(id: string) {
    this.expenseService.getById(id).subscribe((expense) => {
      this.selectedExpense = expense;
      this.buildForm();
      this.isModalOpen = true;
    }
    );
  }

  buildForm() {
    this.form = this.fb.group({
      title: [this.selectedExpense.title || '', Validators.required],
      type: [this.selectedExpense.type || null, Validators.required],
      onDate: [this.selectedExpense.onDate ? new Date(this.selectedExpense.onDate) : null, Validators.required],
      amount: [this.selectedExpense.amount || null, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(new CreateUpdateExpense(this.form.value, this.selectedExpense.id)).subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.get();
    });
  }

  delete(id: string) {
    this.confirmationService.warn('::AreYouSureToDelete','AbpAccount::AreYouSure')
      .subscribe(status => {
        if (status === Confirmation.Status.confirm) {
          this.store.dispatch(new DeleteExpense(id)).subscribe(() => this.get());
        }
      });
  }
}
