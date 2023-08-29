import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { workersResolver } from 'src/app/resolvers/workers.resolver';
import { flightsResolver } from 'src/app/resolvers/flights.resolver';
import { flightDetailsResolver } from 'src/app/resolvers/flight-details.resolver';
import { hasFlightSelectedGuard } from 'src/app/guards/has-flight-selected.guard';

const routes: Routes = [
  {
    path: "", resolve: { workers: workersResolver }, component: WorkersComponent, children: [
      {
        path: ":id",  component: FlightsComponent, 
          resolve: { flights: flightsResolver },
          children: [
            { path: "", redirectTo: "flight", pathMatch: "full" },
            { path: "flight", canActivate: [hasFlightSelectedGuard], children: []  },
            { path: "flight/:fid", component: FlightDetailsComponent, resolve: { details: flightDetailsResolver } }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
