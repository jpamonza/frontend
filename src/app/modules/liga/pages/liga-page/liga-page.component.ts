import { Component } from '@angular/core';
import { EstadoService } from 'src/app/modules/shared/services/estado.service';

@Component({
  selector: 'app-liga-page',
  templateUrl: './liga-page.component.html',
  styleUrls: ['./liga-page.component.scss'],
})
export class LigaPageComponent {
  public paisSeleccionado: string;

  constructor(private estadoService: EstadoService) {
    if (this.estadoService.getPaisSeleccionado()) {
      this.paisSeleccionado = this.estadoService.getPaisSeleccionado();
    }
  }

  public actualizarPaisSeleccionado(nuevoPais: string): void {
    this.paisSeleccionado = nuevoPais;
  }
}
