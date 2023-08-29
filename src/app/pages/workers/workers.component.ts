import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkersComponent {

  workers$ = this.route.data.pipe(map(({ workers }) => workers ));

  constructor(private route: ActivatedRoute) { }


}
