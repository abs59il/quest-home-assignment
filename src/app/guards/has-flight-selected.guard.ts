import { ActivatedRoute, CanActivateFn, Router, createUrlTreeFromSnapshot } from '@angular/router';
import { WorkersService } from '../services/workers.service';
import { inject } from '@angular/core';
import { map, of, tap } from 'rxjs';

export const hasFlightSelectedGuard: CanActivateFn = (route, state) => {

  const svc = inject(WorkersService);
  const router = inject(Router);
  const activatedRoute = inject(ActivatedRoute);

  const id = route.parent?.paramMap.get("id");
  const fid = route.paramMap.get("fid");

  if (!fid) {

    return svc.getFlights(Number.parseInt(id!) ?? 1).pipe(
      tap(t => console.log(t)),
      map(response => router.parseUrl('workers/' + id + '/flight/' + response[0].num)))

  }

  // console.log({ fid, id, resv: route.parent?.data });

  return of(true);
};
