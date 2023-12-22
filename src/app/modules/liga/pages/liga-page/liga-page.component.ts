import { Component } from '@angular/core';

@Component({
  selector: 'app-liga-page',
  templateUrl: './liga-page.component.html',
  styleUrls: ['./liga-page.component.scss']
})
export class LigaPageComponent {
  public paisSeleccionado: string = "England";

  constructor() { }

  public actualizarPaisSeleccionado(nuevoPais: string): void {
    this.paisSeleccionado = nuevoPais;
  }
}
