import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LigaRoutingModule } from './liga-routing.module';
import { components } from './components';
import { pages } from './pages';
import { TablaLigaService } from './services/tabla-liga.service';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballApiInterceptor,
      multi: true,
    },
  ],
})
export class LigaModule {}
