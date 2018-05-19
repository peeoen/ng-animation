import { animate, state, style, transition, trigger } from '@angular/animations';
import { StateDog } from '../../models/state-dog';

export const animation = [
    trigger('dogState', [
        state('in', style({opacity: 0, transform: 'translateX(100%)'})),
        state(StateDog.Active,
            style({
                opacity: '1',
                transform: 'scale(1.6) translateX(88%)'
            })
        ),
        state(StateDog.LeftActive,
            style({
                opacity: '0.5',
                transform: 'translateX(0%)'
            })
        ),
        state(StateDog.RightActive,
            style({
                opacity: '0.5',
                transform: 'translateX(280%)'
            })
        ),
        state(StateDog.LeftRepo,
            style({
                opacity: '0',
                transform: 'translateX(-150%)'
            })
        ),
        state(StateDog.RightRepo,
            style({
                opacity: '0',
                transform: 'translateX(430%)'
            })
        ),
        transition('* => *', animate('500ms')),
    ])
];
