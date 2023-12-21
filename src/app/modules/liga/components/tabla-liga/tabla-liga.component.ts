import { Component, OnDestroy, OnInit } from '@angular/core';
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
  // public equipos: Standing[] = null;
  // private destroy: Subject<void> = null;
  // private subscription: Subscription = null;
  public equipos: Observable<Standing[]> = null;

  constructor(private tablaService: TablaLigaService) {
    // this.destroy = new Subject<void>();
    // this.tablaService
    //   .getStandings()
    //   // .pipe(takeUntil(this.destroy))
    //   // .subscribe((response) => {
    //   //   console.log(response);
    //   //   this.equipos = response;
    //   // });
    this.equipos = this.tablaService.getStandings();
  }

  // public ngOnDestroy(): void {
  //   // this.subscription.unsubscribe();
  //   // this.destroy.next();
  //   // this.destroy.complete();
  // }
}
