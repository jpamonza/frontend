import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-liga',
  templateUrl: './menu-liga.component.html',
  styleUrls: ['./menu-liga.component.scss'],
})
export class MenuLigaComponent {
  @Output() public paisSeleccionado = new EventEmitter<string>();
  public ligas: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];

  constructor() {}

  public seleccionarPais(pais: string): void {
    this.paisSeleccionado.emit(pais);
  }
}
