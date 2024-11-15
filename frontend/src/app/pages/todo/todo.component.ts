import { Component, inject } from '@angular/core';
import { TodosService } from '../../shared/services/todos.service';
import { TodosFirebaseService } from '../../shared/services/todosFirebase.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todosService = inject(TodosService);
  todosFirebaseService = inject(TodosFirebaseService);

  ngOnInit(): void {
    this.todosFirebaseService.getTodos().subscribe((todos) => {
      this.todosService.todosSig.set(todos);
    });
  }
}
