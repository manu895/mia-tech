"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
        console.log(`Todo "${todo.title}" aggiunto all'utente ${this.name}.`);
    }
}
exports.User = User;
