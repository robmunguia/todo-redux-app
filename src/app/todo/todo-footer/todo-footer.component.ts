import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFiltros from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actions';
import { AppState } from '../../app.reducers';

import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltros.filtrosValidos[] = ['todos', 'pendientes', 'terminados'];
  filtroActual: fromFiltros.filtrosValidos;
  pendientes: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes( state.todos );
      this.filtroActual = state.filtro;
    });
  }

  cambiaFiltro( filtro: fromFiltros.filtrosValidos ) {
    const accion = new fromFiltros.SetFiltroAction( filtro );
    this.store.dispatch(accion);

  }

  contarPendientes ( todos: Todo[] ) {
    this.pendientes = todos.filter( todo => !todo.terminado ).length;
  }

  borrarTodos() {
    const accion = new fromTodo.BorrarALLTodoAction();
    this.store.dispatch(accion);
  }

}
