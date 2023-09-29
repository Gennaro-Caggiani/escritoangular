import { TestBed } from '@angular/core/testing';

import { CreateTareaService } from './create-tarea.service';

describe('CreateTareaService', () => {
  let service: CreateTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
