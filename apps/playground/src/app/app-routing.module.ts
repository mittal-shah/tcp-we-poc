import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PgEditableInputComponent } from './features/pg-editable-input/pg-editable-input.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [0, 64],
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/editable-input/text' },
  { component: PgEditableInputComponent, path: 'editable-input/:type' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, routerOptions)],
})
export class AppRoutingModule {}
