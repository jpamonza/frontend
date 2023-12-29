import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LigaRoutingModule } from './liga-routing.module';
import { components } from './components';
import { pages } from './pages';
import { TablaLigaService } from './services/tabla-liga.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule, createFeature } from '@ngrx/store';
import { ligaReducer } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LigaEffect } from './state/effects/liga.effects';

@NgModule({
  declarations: [components, pages],
  imports: [
    CommonModule,
    HttpClientModule,
    LigaRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(
      createFeature({
        name: 'ligas',
        reducer: ligaReducer,
      })
    ),
    EffectsModule.forFeature([LigaEffect]),
  ],
  exports: [components, pages],
  providers: [TablaLigaService],
})
export class LigaModule {}
