import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ligas',
    pathMatch: 'full',
  },
  {
    path: 'ligas',
    loadChildren: () =>
      import('./modules/liga/liga.module').then((m) => m.LigaModule),
  },
  {
    path: 'equipo',
    loadChildren: () =>
      import('./modules/equipo/equipo.module').then((m) => m.EquipoModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
