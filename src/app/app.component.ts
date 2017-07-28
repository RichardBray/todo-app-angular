import { Todo } from './todo';
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  addTodo(): void {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo): void {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo): void {
    this.todoDataService.deleteTodoById(todo.id);
  }

  allTodos(): number {
    return this.incompleteTodos.length + this.completeTodos.length;
  }
  get incompleteTodos(): Array<Todo> {
    return this.todoDataService.getIncompleteTodos();
  }

  get completeTodos(): Array<Todo> {
    return this.todoDataService.getCompleteTodos();
  }
}
