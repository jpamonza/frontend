import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPageComponent } from './equipo-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EquipoPageComponent', () => {
  let component: EquipoPageComponent;
  let fixture: ComponentFixture<EquipoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoPageComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
