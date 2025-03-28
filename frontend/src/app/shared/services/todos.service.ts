import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "../../interfaces/TodosInterface.interface";

@Injectable({
  providedIn:'root',
})

export class TodosService {
  todosSig = signal<TodoInterface[]>([]);

  addTodo(text:string, id:string):void{
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id,
    };
    this.todosSig.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void{
    this.todosSig.update((todos)=>
      todos.map((todo) => (todo.id === id ? { ...todo,text} : todo))
  );
  }

  removeTodo(id:string):void{
    this.todosSig.update((todos)=>todos.filter((todo)=>todo.id !==id))
  }

  toggleTodo(id: string): void{
    this.todosSig.update((todos)=>
    todos.map((todo)=>
    todo.id === id ? {...todo, isCompleted: !todo.isCompleted}:todo))
  }

  toggleAll(isCompleted: boolean): void{
    this.todosSig.update((todos)=>
    todos.map((todo)=>({...todo,isCompleted})))
  }
}
