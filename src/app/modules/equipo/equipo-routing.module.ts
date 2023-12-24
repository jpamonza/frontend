import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoPageComponent } from './pages/equipo-page/equipo-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: EquipoPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoRoutingModule { }
