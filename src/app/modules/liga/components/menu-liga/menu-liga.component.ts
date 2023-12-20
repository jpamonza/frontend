import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss']
})
export class MenuLigaComponent {
  private titulo = "Titulo"
  public ligas: string[] = ["England", "Spain", "Germany", "France", "Italy"];

  constructor() { }

  public getTitulo(): string {
    return this.titulo;
  }

}
