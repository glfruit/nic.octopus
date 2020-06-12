import { ApplicationLayoutComponent } from '@abp/ng.theme.basic';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home'
      } as ABP.Route
    }
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule)
  },
  {
    path: 'tenant-management',
    loadChildren: () => import('@abp/ng.tenant-management').then(m => m.TenantManagementModule)
  },
  {
    path: 'setting-management',
    loadChildren: () => import('@abp/ng.setting-management').then(m => m.SettingManagementModule)
  },
  {
    path: 'expenses',
    component: ApplicationLayoutComponent,
    loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule),
    data: {
      routes: {
        name: '::Menu:Expenses',
        iconClass: 'fas fa-money'
      } as ABP.Route
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
