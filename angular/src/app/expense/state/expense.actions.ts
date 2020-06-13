import { CreateUpdateExpenseDto } from './../models/create-update-expense-dto';
export class GetExpenses {
  static readonly type = '[Expense] Get Expense';
}

export class CreateUpdateExpense {
  static readonly type = '[Expense] Create Update Expense';

  constructor(public payload: CreateUpdateExpenseDto, public id?: string) {}
}

export class DeleteExpense {
  static readonly type = '[Expense] Delete';
  constructor(public id: string) {}
}
