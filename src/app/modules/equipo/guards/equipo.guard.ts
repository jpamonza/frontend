import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../../shared/services/estado.service';

@Injectable()
export class EquipoGuard  {
  public constructor(
    private estadoService: EstadoService,
    private router: Router
  ) {}

  public canActivate(): boolean {
    console.log('canActivate');
    const existePaisSeleccionado = this.estadoService.getPaisSeleccionado()
      ? true
      : false;

    if (!existePaisSeleccionado) {
      this.router.navigate(['/ligas']);
    }

    return existePaisSeleccionado;
  }

  public canLoad(): boolean {
    console.log('canLoad');
    return true;
  }
}
