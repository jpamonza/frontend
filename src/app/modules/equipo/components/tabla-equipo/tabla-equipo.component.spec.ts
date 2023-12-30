import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEquipoComponent } from './tabla-equipo.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FixtureService } from '@equipo/services/fixture.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TablaEquipoComponent', () => {
  let component: TablaEquipoComponent;
  let fixture: ComponentFixture<TablaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaEquipoComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), FixtureService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
