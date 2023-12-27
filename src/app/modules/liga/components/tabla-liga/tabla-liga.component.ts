import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TablaLigaService } from '../../services/tabla-liga.service';
import { Observable, Subject, Subscription, map, of, takeUntil } from 'rxjs';
import {
  GetStandingsResponse,
  Standing,
} from '../../models/get-standings-response.model';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.scss'],
})
export class TablaLigaComponent {
  @Input() public set pais(nuevoPais: string) {
    this.equipos = this.tablaService.getStandings(nuevoPais);
  }

  // public equipos: Standing[] = null;
  // private destroy: Subject<void> = null;
  // private subscription: Subscription = null;
  public equipos: Observable<Standing[]> = null;
  public columnas: string[] = [
    'rank',
    'logo',
    'name',
    'games',
    'wins',
    'loses',
    'draw',
    'goalsDiff',
    'points',
  ];

  constructor(private tablaService: TablaLigaService) {
    // this.destroy = new Subject<void>();
    // this.tablaService
    //   .getStandings()
    //   // .pipe(takeUntil(this.destroy))
    //   // .subscribe((response) => {
    //   //   console.log(response);
    //   //   this.equipos = response;
    //   // });
  }

  // public ngOnDestroy(): void {
  //   // this.subscription.unsubscribe();
  //   // this.destroy.next();
  //   // this.destroy.complete();
  // }

  public verPartidos(equipo: string): void {
    console.log('ver partidos de:', equipo);
  }
}
