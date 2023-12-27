import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private paisSeleccionado: string = '';

  public setPaisSeleccionado(pais: string): void {
    this.paisSeleccionado = pais;
  }

  public getPaisSeleccionado(): string {
    return this.paisSeleccionado;
  }
}
