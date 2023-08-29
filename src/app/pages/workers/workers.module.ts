import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';


@NgModule({
  declarations: [
    WorkersComponent,
    FlightsComponent,
    FlightDetailsComponent
  ],
  imports: [
    CommonModule,
    TimePipe,
    WorkersRoutingModule
  ]
})
export class WorkersModule { }
