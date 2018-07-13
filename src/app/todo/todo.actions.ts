import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agrega Todo';
export const EDITAR_TODO = '[TODO] Edita Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar ALL Todo';

export const TOGGLE_TODO = '[TODO] Toggle All Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle Todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor( public id: number, public texto: string ) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor( public id: number ) { }
}

export class BorrarALLTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;

    constructor( ) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number ) { }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor( public estado: boolean ) { }
}

export type Acciones = AgregarTodoAction |
                        ToggleTodoAction |
                        ToggleAllTodoAction |
                        BorrarTodoAction |
                        BorrarALLTodoAction |
                        EditarTodoAction;
