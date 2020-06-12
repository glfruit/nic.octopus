
import { ExpenseType } from './expense-type';

import { AuditedEntityDto } from '@abp/ng.core';

export class ExpenseDto extends AuditedEntityDto<string> {
  title: string;
  onDate: string;
  type: any;
  amount: number;
  lastModificationTime?: string;
  lastModifierId?: string;
  creationTime: string;
  creatorId?: string;
  id: string;

  constructor(initialValues: Partial<ExpenseDto> = {}) {
    super(initialValues);
  }
}
