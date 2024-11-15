import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class TodosFirebaseService {
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, "todos");

  getTodos(): Observable<TodoInterface[]> {
    return collectionData(this.todosCollection, {
      idField: "id",
    }) as Observable<TodoInterface[]>;
  }
}

export interface TodoInterface {
  text: string;
  isCompleted: any;
  id: string;
}
