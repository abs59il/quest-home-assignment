import { animate, style, transition, trigger, group } from "@angular/animations";

export const transitionAnimation = trigger(
  'transition',
  [
    transition(
      ':enter',
      [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        group([animate('100ms ease-in-out',
          style({ transform: 'translateX(0)' })),
        animate('100ms ease-in-out',
          style({ opacity: '1' }))]),

      ]
    )
    , transition(
      ':leave',
      [
        style({ transform: 'translateX(0px)', opacity: 1 }),
        group(
          [animate('100ms ease-in-out',
            style({ transform: 'translateX(-20px)' })),
          animate('100ms ease-in-out',
            style({ opacity: '0' }))])
      ]
    )
  ]
)