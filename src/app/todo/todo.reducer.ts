import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Correr');
const todo2 = new Todo('Caminar');
const estadoInicial: Todo[] = [todo1, todo2];

todo1.terminado = true;

export function todoReducer( state = estadoInicial, action: fromTodo.Acciones ): Todo[] {

    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo  ];

        case fromTodo.EDITAR_TODO:

            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        texto: action.texto.charAt(0).toUpperCase() + action.texto.slice(1)
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter( todoEdit => todoEdit.id !== action.id );

        case fromTodo.BORRAR_ALL_TODO:
            return state.filter( todoEdit => !todoEdit.terminado );

        case fromTodo.TOGGLE_TODO:

            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        terminado: !todoEdit.terminado
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.TOGGLE_ALL_TODO:

            return state.map( todoEdit => {
                    return {
                        ...todoEdit,
                        terminado: action.estado
                    };
            });

        default:
            return state;
    }

}
