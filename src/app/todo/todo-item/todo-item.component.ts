import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('txtEditando') txtFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  btnDelete: FormControl;
  editando: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.terminado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );
    this.chkField.valueChanges
    .subscribe((valor) => {
      const accion = new fromTodo.ToggleTodoAction( this.todo.id );
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {

    if ( this.txtInput.invalid ) {
      return;
    }
    if ( this.txtInput.value === this.todo.texto ) {
      return;
    }

    this.editando = false;
    const accion = new fromTodo.EditarTodoAction( this.todo.id, this.txtInput.value );
    this.store.dispatch(accion);
  }

  borrarTarea () {
    const accion = new fromTodo.BorrarTodoAction( this.todo.id );
    this.store.dispatch(accion);
  }

}
