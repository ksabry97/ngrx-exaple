import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { ViewModeComponent } from './view-mode/view-mode.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormGroupComponent,
  },
  {
    path: 'view',
    component: ViewModeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
