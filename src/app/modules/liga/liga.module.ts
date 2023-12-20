import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLigaComponent } from './components/menu-liga/menu-liga.component';
import { TablaLigaComponent } from './components/tabla-liga/tabla-liga.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MenuLigaComponent, TablaLigaComponent, TituloComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MenuLigaComponent, TablaLigaComponent, TituloComponent],
})
export class LigaModule {}
