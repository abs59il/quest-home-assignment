import { Component, DestroyRef, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, interval, map, switchMap, tap, merge, withLatestFrom, of, finalize } from 'rxjs';
import { WorkersService } from 'src/app/services/workers.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from 'src/environments/environment';
import { transitionAnimation } from 'src/app/pages/animation/transition.animation';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  animations: [transitionAnimation]
})
export class FlightsComponent {

  loading = false;

  flights$ = this.route.data.pipe(map(({ flights }) => flights));

  refresh$ = this.flights$.pipe(
    takeUntilDestroyed(),
    switchMap(f => interval(environment.refreshTime).pipe(
      tap(t => this.loading = true),
      switchMap(t => this.workers.getFlights(this.workerId).pipe(
        tap(t => this.loading = false),
        finalize(() => this.loading = false)))))).subscribe(resp => console.log(resp));

  constructor(private workers: WorkersService, private route: ActivatedRoute) { }

  get workerId() {
    return Number.parseInt(this.route.snapshot.paramMap.get("id")!);
  }

}
