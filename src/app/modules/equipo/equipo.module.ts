import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoPageComponent } from './pages/equipo-page/equipo-page.component';
import { TablaEquipoComponent } from './components/tabla-equipo/tabla-equipo.component';
import { FixtureService } from './services/fixture.service';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { EquipoGuard } from './guards/equipo.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FootballApiInterceptor } from '../shared/interceptors/football-api.interceptor';

@NgModule({
  declarations: [EquipoPageComponent, TablaEquipoComponent],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    FixtureService,
    EquipoGuard,
  ],
})
export class EquipoModule {}
