import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './demo/list/list.component';
import { DetailsComponent } from './demo/details/details.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './element/form/form.component';
import { TableComponent } from './element/table/table.component';
import { ButtonComponent } from './element/button/button.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
