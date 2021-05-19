import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogOnComponent } from './features/log-on/log-on.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/logon' },
  { component: LogOnComponent, path: 'logon' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
