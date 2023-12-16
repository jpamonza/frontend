import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './modules/liga/components/titulo/titulo.component';
import { MenuLigaComponent } from './modules/liga/components/menu-liga/menu-liga.component';
import { TablaLigaComponent } from './modules/liga/components/tabla-liga/tabla-liga.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuLigaComponent,
    TablaLigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
