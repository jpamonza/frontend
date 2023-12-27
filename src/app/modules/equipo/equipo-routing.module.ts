import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoPageComponent } from './pages/equipo-page/equipo-page.component';
import { EquipoGuard } from './guards/equipo.guard';

const routes: Routes = [
  {
    path: ':id',
    component: EquipoPageComponent,
    pathMatch: 'full',
    canActivate: [EquipoGuard],
    canLoad: [EquipoGuard],
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
export class EquipoRoutingModule {}
