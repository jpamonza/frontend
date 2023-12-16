import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss']
})
export class MenuLigaComponent implements OnInit {
  private titulo = "Titulo"
  public ligas: string[] = ["England", "Spain", "Germany", "France", "Italy"];

  constructor() { }

  ngOnInit(): void {
  }

  public getTitulo(): string {
    return this.titulo;
  }

}
