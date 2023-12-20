import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.scss']
})
export class TablaLigaComponent {

  public equipos: string[] = ["Manchester City"];

  constructor() { }

}
