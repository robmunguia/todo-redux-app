import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform( todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {

    switch (filtro) {
      case 'terminados':
        return todos.filter( todo => todo.terminado );

      case 'pendientes':
        return todos.filter( todo => !todo.terminado );

      default:
        return todos;
    }

  }

}
