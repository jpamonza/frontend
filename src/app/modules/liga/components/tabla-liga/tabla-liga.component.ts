import { Component, OnInit } from '@angular/core';
import { TablaLigaService } from '../../services/tabla-liga.service';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.scss'],
})
export class TablaLigaComponent {
  public equipos: object = {};

  constructor(private tablaService: TablaLigaService) {
    this.tablaService.getStandings().subscribe((response) => {
      console.log(response);
      this.equipos = response;
    });
  }
}
