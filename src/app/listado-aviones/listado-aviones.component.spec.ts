import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAvionesComponent } from './listado-aviones.component';

describe('ListadoAvionesComponent', () => {
  let component: ListadoAvionesComponent;
  let fixture: ComponentFixture<ListadoAvionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAvionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
