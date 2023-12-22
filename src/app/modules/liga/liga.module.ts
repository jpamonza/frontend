import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LigaRoutingModule } from './liga-routing.module';
import { components } from './components';
import { pages } from './pages';
import { TablaLigaService } from './services/tabla-liga.service';

@NgModule({
  declarations: [components, pages],
  imports: [CommonModule, HttpClientModule, LigaRoutingModule],
  exports: [components, pages],
  providers: [TablaLigaService],
})
export class LigaModule {}
