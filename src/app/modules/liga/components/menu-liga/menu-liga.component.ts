import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoService } from 'src/app/modules/shared/services/estado.service';
import { actualizarPaisSeleccionado } from '../../state/actions';
import { selectPaisSeleccionado } from '../../state/selectors/liga.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss'],
})
export class MenuLigaComponent {
  // @Output() public paisSeleccionado = new EventEmitter<string>();
  public ligas: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  public ligaSeleccionada: Observable<string> = this.store.select(selectPaisSeleccionado);

  constructor(private store: Store) {
    // if (this.estadoService.getPaisSeleccionado()) {
    //   this.ligaSeleccionada = this.estadoService.getPaisSeleccionado();
    //   // this.paisSeleccionado.emit(this.ligaSeleccionada);
    // }
    // this.estadoService.setPaisSeleccionado(this.ligaSeleccionada);
  }

  public seleccionarPais(pais: string): void {
    // this.ligaSeleccionada = pais;
    // this.estadoService.setPaisSeleccionado(this.ligaSeleccionada);
    // this.paisSeleccionado.emit(pais);
    this.store.dispatch(actualizarPaisSeleccionado({ pais }));
  }
}
