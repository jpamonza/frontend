import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoPageComponent } from './pages/equipo-page/equipo-page.component';
import { TablaEquipoComponent } from './components/tabla-equipo/tabla-equipo.component';
import { FixtureService } from './services/fixture.service';
import { EquipoGuard } from './guards/equipo.guard';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, createFeature } from '@ngrx/store';
import { equipoReducer } from './state/reducers';
import { effects } from './state/effects';

@NgModule({
  declarations: [EquipoPageComponent, TablaEquipoComponent],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(
      createFeature({
        name: 'equipos',
        reducer: equipoReducer,
      })
    ),
    EffectsModule.forFeature(effects),
  ],
  providers: [FixtureService, EquipoGuard],
})
export class EquipoModule {}
