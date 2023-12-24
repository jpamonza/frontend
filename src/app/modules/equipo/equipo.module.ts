import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoPageComponent } from './pages/equipo-page/equipo-page.component';
import { TablaEquipoComponent } from './components/tabla-equipo/tabla-equipo.component';
import { FixtureService } from './services/fixture.service';

@NgModule({
  declarations: [EquipoPageComponent, TablaEquipoComponent],
  imports: [CommonModule, EquipoRoutingModule],
  providers: [FixtureService]
})
export class EquipoModule {}
