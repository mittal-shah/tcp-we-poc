import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgEditableInputComponent } from './features/pg-editable-input/pg-editable-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/editable-input', pathMatch: 'full' },
  { path: 'editable-input', component: PgEditableInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
