
import { ExpenseType } from './expense-type';
export class CreateUpdateExpenseDto  {
  title: string;
  onDate: string;
  type: any;
  amount: number;

  constructor(initialValues: Partial<CreateUpdateExpenseDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
