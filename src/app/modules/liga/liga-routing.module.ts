import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaLigaComponent } from './components/tabla-liga/tabla-liga.component';

const routes: Routes = [
  {
    path: '',
    component: TablaLigaComponent,
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
