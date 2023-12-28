import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoService } from 'src/app/modules/shared/services/estado.service';
import { selectPaisSeleccionado } from '../../state/selectors/liga.selectors';
import { Observable } from 'rxjs';
import { actualizarPaisSeleccionado } from '../../state/actions';

@Component({
  selector: 'app-liga-page',
  templateUrl: './liga-page.component.html',
  styleUrls: ['./liga-page.component.scss'],
})
export class LigaPageComponent {
  // public paisSeleccionado: string = "England";
  public paisSeleccionado2: Observable<string> = this.store.select(selectPaisSeleccionado);

  constructor(private estadoService: EstadoService, private store: Store) {
    // if (this.estadoService.getPaisSeleccionado()) {
    //   this.paisSeleccionado = this.estadoService.getPaisSeleccionado();
    // }
  }

  // public actualizarPaisSeleccionado(nuevoPais: string): void {
  //   this.paisSeleccionado = nuevoPais;
  //   this.store.dispatch(actualizarPaisSeleccionado({ pais: nuevoPais }))
  // }
}
