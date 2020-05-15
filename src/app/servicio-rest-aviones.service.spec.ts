import { TestBed } from '@angular/core/testing';

import { ServicioRestAvionesService } from './servicio-rest-aviones.service';

describe('ServicioRestAvionesService', () => {
  let service: ServicioRestAvionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestAvionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
