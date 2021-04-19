import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LogOnComponent} from './webclock/features/log-on/log-on.component';

const routes: Routes = [
  {path: '', redirectTo: '/logon', pathMatch: 'full'},
  {path: 'logon', component: LogOnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
