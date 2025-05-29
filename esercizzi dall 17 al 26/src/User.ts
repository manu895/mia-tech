
import { Todo } from './types'; 

export class User {
    id: number;
    name: string;
    email?: string;
    
    todos: Todo[]; 

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = []; 
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
        console.log(`Todo "${todo.title}" aggiunto all'utente ${this.name}.`);
    }
}