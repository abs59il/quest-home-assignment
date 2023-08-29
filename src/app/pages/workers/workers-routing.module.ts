import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers.component';
import { workersResolver } from 'src/app/resolvers/workers.resolver';
import { flightsResolver } from 'src/app/resolvers/flights.resolver';
import { flightDetailsResolver } from 'src/app/resolvers/flight-details.resolver';
import { hasFlightSelectedGuard } from 'src/app/guards/has-flight-selected.guard';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';

const routes: Routes = [
  {
    path: "", resolve: { workers: workersResolver }, component: WorkersComponent, children: [
      { path: "", pathMatch: "full", redirectTo: "1" },
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
