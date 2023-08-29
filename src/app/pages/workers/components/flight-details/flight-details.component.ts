import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {

  details$ = this.route.data.pipe(map(({ details }) => details as Flight ));

  constructor(private route: ActivatedRoute) { }

}
