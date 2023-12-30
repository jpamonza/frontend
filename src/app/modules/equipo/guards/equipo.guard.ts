import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPaisSeleccionado } from '../../liga/state/selectors/liga.selectors';

@Injectable({
  providedIn: 'root',
})
export class EquipoGuard {
  public constructor(private store: Store, private router: Router) {}

  public canActivate(): Observable<boolean> {
    console.log('canActivate');
    return this.store.select(selectPaisSeleccionado).pipe(
      map((paisSeleccionado) => {
        const existePaisSeleccionado = paisSeleccionado ? true : false;

        if (!existePaisSeleccionado) {
          this.router.navigate(['/ligas']);
        }

        return existePaisSeleccionado;
      })
    );
  }
}
