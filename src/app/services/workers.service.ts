import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Worker } from '../models/worker.model';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  getWorkers() {

    return this.http.get<Worker[]>(`${ environment.api }/workers`);

  }

  getFlights(workerId: number) {

    return this.http.get<Flight[]>(`${ environment.api }/flights/${ workerId }`);

  }

}
