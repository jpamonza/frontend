import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoService } from 'src/app/modules/shared/services/estado.service';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss'],
})
export class MenuLigaComponent {
  @Output() public paisSeleccionado = new EventEmitter<string>();
  public ligas: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  public ligaSeleccionada: string = this.ligas[0];

  constructor(private estadoService: EstadoService) {
    if (this.estadoService.getPaisSeleccionado()) {
      this.ligaSeleccionada = this.estadoService.getPaisSeleccionado();
      // this.paisSeleccionado.emit(this.ligaSeleccionada);
    }
    this.estadoService.setPaisSeleccionado(this.ligaSeleccionada);
  }

  public seleccionarPais(pais: string): void {
    this.ligaSeleccionada = pais;
    this.estadoService.setPaisSeleccionado(this.ligaSeleccionada);
    this.paisSeleccionado.emit(pais);
  }
}
