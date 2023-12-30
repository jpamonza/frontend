import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaPageComponent } from './liga-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LigaPageComponent', () => {
  let component: LigaPageComponent;
  let fixture: ComponentFixture<LigaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LigaPageComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LigaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
