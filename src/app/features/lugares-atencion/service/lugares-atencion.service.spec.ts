import { TestBed } from '@angular/core/testing';

import { LugaresAtencionService } from './lugares-atencion.service';

describe('LugaresAtencionService', () => {
  let service: LugaresAtencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugaresAtencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
