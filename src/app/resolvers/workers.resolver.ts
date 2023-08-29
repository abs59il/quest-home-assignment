import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { WorkersService } from '../services/workers.service';
import { Worker } from '../models/worker.model';

export const workersResolver: ResolveFn<Worker[]> = (route, state) => {

  const svc = inject(WorkersService);
  
  return svc.getWorkers();
  
};
