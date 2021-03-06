import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] = Set Filtro';

export type filtrosValidos = 'todos' |
                             'pendientes' |
                             'terminados';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor ( public filtro: filtrosValidos ) {

    }
}

export type acciones = SetFiltroAction;
