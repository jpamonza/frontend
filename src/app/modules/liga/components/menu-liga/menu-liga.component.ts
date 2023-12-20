import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss']
})
export class MenuLigaComponent {
  public ligas: string[] = ["England", "Spain", "Germany", "France", "Italy"];

  constructor() { }

}
