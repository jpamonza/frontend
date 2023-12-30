import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLigaComponent } from './tabla-liga.component';
import { tablaEquiposSolicitud } from '@liga/state/actions';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TablaLigaComponent', () => {
  let component: TablaLigaComponent;
  let fixture: ComponentFixture<TablaLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaLigaComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // deteccion de cambios manual, solo una vez salvo sean casos especiales
  });

  describe('ngOnInit()', () => {
    it('should call store.dispatch with tablaEquiposSolicitud', () => {
      const dispatchSpy = spyOn(component['store'], 'dispatch');
      component.ngOnInit();

      expect(dispatchSpy).toHaveBeenCalledWith(tablaEquiposSolicitud());
    });
  });

  it('should create', () => {
    // escenario

    expect('abc').toBe('abc');
    expect({ a: 5 }).toEqual({ a: 5 });
    expect(component).toBeTruthy();
  });
});
