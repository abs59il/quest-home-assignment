import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { WorkersService } from '../services/workers.service';
import { Flight } from '../models/flight.model';

export const flightsResolver: ResolveFn<Flight[]> = (route, state) => {

  const svc = inject(WorkersService);


  const id = Number.parseInt(route.paramMap.get("id") ?? "1");
  console.log(id);
  
  return svc.getFlights(id);

};
