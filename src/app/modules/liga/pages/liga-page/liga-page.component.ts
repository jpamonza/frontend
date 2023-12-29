import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPaisSeleccionado } from '../../state/selectors/liga.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liga-page',
  templateUrl: './liga-page.component.html',
  styleUrls: ['./liga-page.component.scss'],
})
export class LigaPageComponent {
  public paisSeleccionado2: Observable<string> = this.store.select(selectPaisSeleccionado);

  constructor(private store: Store) {}
}
