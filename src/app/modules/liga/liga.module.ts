import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LigaRoutingModule } from './liga-routing.module';
import { components } from './components';
import { pages } from './pages';
import { TablaLigaService } from './services/tabla-liga.service';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { FootballApiInterceptor } from '../shared/interceptors/football-api.interceptor';

@NgModule({
  declarations: [components, pages],
  imports: [
    CommonModule,
    HttpClientModule,
    LigaRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  exports: [components, pages],
  providers: [
    TablaLigaService,
  ],
})
export class LigaModule {}
