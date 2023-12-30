import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEquipo } from '@equipo/state/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-equipo-page',
  templateUrl: './equipo-page.component.html',
  styleUrls: ['./equipo-page.component.scss'],
})
export class EquipoPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(fromEquipo.fixtureEquipoSolicitado({ equipoActual: id }));
  }
}
