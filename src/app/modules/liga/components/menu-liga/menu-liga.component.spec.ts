import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLigaComponent } from './menu-liga.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MenuLigaComponent', () => {
  let component: MenuLigaComponent;
  let fixture: ComponentFixture<MenuLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLigaComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
