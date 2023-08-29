import { CanActivateFn } from '@angular/router';

export const hasFlightGuard: CanActivateFn = (route, state) => {
  return true;
};
