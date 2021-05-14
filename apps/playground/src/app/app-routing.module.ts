import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PgEditableInputComponent } from './features/pg-editable-input/pg-editable-input.component';

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

const routes: Routes = [
  { path: '', redirectTo: '/editable-input/text', pathMatch: 'full' },
  { path: 'editable-input/:type', component: PgEditableInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
