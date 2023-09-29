import { TestBed } from '@angular/core/testing';

import { ListarTareaService } from './listar-tarea.service';

describe('ListarTareaService', () => {
  let service: ListarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
