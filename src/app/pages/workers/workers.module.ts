import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { TimePipe } from 'src/app/pipes/time.pipe';


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
