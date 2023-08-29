import { ResolveFn } from '@angular/router';
import { Flight } from '../models/flight.model';

export const flightDetailsResolver: ResolveFn<Flight> = (route, state) => {

  const flights: Flight[] = route.parent?.data['flights'];

  return flights.find(f => f.num === route.paramMap.get("fid"))! ;
};
