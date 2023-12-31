import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigaPageComponent } from './pages/liga-page/liga-page.component';

const routes: Routes = [
  {
    path: '',
    component: LigaPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaRoutingModule {}
