import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseListComponent } from './expense-list/expense-list.component';


@NgModule({
  declarations: [ExpenseListComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ]
})
export class ExpenseModule { }
