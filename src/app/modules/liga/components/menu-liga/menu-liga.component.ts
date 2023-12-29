import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actualizarPaisSeleccionado } from '../../state/actions';
import { selectPaisSeleccionado } from '../../state/selectors/liga.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss'],
})
export class MenuLigaComponent {
  public ligas: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  public ligaSeleccionada: Observable<string> = this.store.select(selectPaisSeleccionado);

  constructor(private store: Store) {}

  public seleccionarPais(pais: string): void {
    this.store.dispatch(actualizarPaisSeleccionado({ pais }));
  }
}
