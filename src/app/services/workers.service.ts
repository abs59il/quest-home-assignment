import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import WORKERS_DATA from "../data/workers.data";
import { environment } from 'src/environments/environment';
import { Worker } from '../models/worker.model';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { 

    // this.http.get(environment.api + "/workers").subscribe(resp => console.log(resp))


  }

  getWorkers() {

    return this.http.get<Worker[]>(environment.api + "/workers");

  }

  getFlights(workerId: number) {

    return this.http.get<Flight[]>(environment.api + "/flights/" + workerId);

    // return of(
    //   [{ "workerId": 1, "num": "BA123", "from": "London", "to": "New York City", "from_date": "18/04/2023", "to_date": "18/04/2023", "plane": "Boeing 777", "duration": 480, "from_gate": 1, "to_gate": 3 }, { "workerId": 1, "num": "BA456", "from": "New York City", "to": "Los Angeles", "from_date": "19/04/2023", "to_date": "19/04/2023", "plane": "Boeing 787", "duration": 420, "from_gate": 2, "to_gate": 5 }, { "workerId": 1, "num": "BA789", "from": "Los Angeles", "to": "London", "from_date": "20/04/2023", "to_date": "21/04/2023", "plane": "Boeing 777", "duration": 660, "from_gate": 4, "to_gate": 1 }, { "workerId": 1, "num": "BA987", "from": "London", "to": "Dubai", "from_date": "26/04/2023", "to_date": "27/04/2023", "plane": "Boeing 787", "duration": 375, "from_gate": 4, "to_gate": 7 }, { "workerId": 1, "num": "BA654", "from": "Dubai", "to": "Sydney", "from_date": "29/04/2023", "to_date": "30/04/2023", "plane": "Boeing 777", "duration": 930, "from_gate": 2, "to_gate": 6 }, { "workerId": 1, "num": "BA321", "from": "Sydney", "to": "London", "from_date": "03/05/2023", "to_date": "04/05/2023", "plane": "Boeing 777", "duration": 1160, "from_gate": 3, "to_gate": 1 }])

  }

  getFlightDetails(flightId: string) {

    return of()

  }

}
