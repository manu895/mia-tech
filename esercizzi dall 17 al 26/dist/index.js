"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../src/types");
const User_1 = require("../src/User");
const todos = [];
let nextTodoId = 1;
// Crea istanze della classe User
const users = [
    new User_1.User(1, 'Manuel', 'alice@example.com'),
    new User_1.User(2, 'Silvia', 'bob@example.com'),
    new User_1.User(3, 'Armando')
];
function addTodo(title, metadata) {
    const newTodo = Object.assign({ id: nextTodoId++, title: title, completed: false, status: types_1.TodoStatus.Pending }, (metadata !== undefined && { metadata }));
    todos.push(newTodo);
    console.log(`Todo aggiunto: "${newTodo.title}" (ID: ${newTodo.id})`);
    if (newTodo.metadata) {
        console.log('   con metadata:', newTodo.metadata);
    }
    console.log('Todos attuali:', todos);
    return newTodo;
}
function toggleTodoCompleted(id) {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
        todoToToggle.status = todoToToggle.completed ? types_1.TodoStatus.Completed : types_1.TodoStatus.Pending;
        console.log(`Stato del todo (ID: ${id}) cambiato in "completed: ${todoToToggle.completed}" e "status: ${types_1.TodoStatus[todoToToggle.status]}"`);
        console.log('Todos attuali:', todos);
        return todoToToggle;
    }
    else {
        console.error(`Errore: Todo con ID ${id} non trovato.`);
        return undefined;
    }
}
function updateTodoStatus(todoId, newStatus) {
    const todoToUpdate = todos.find(todo => todo.id === todoId);
    if (todoToUpdate) {
        todoToUpdate.status = newStatus;
        if (newStatus === types_1.TodoStatus.Completed) {
            todoToUpdate.completed = true;
        }
        else if (newStatus === types_1.TodoStatus.Pending || newStatus === types_1.TodoStatus.InProgress) {
            todoToUpdate.completed = false;
        }
        console.log(`Stato del todo (ID: ${todoId}) aggiornato a: "${types_1.TodoStatus[todoToUpdate.status]}"`);
        console.log('Todos attuali:', todos);
        return todoToUpdate;
    }
    else {
        console.error(`Errore: Todo con ID ${todoId} non trovato per l'aggiornamento dello stato.`);
        return undefined;
    }
}
function assignTodoToUser(todoId, userId) {
    const todoToAssign = todos.find(todo => todo.id === todoId);
    const userToAssign = users.find(user => user.id === userId);
    if (!todoToAssign) {
        console.error(`Errore: Todo con ID ${todoId} non trovato per l'assegnazione.`);
        return undefined;
    }
    if (!userToAssign) {
        console.error(`Errore: Utente con ID ${userId} non trovato. Impossibile assegnare il todo.`);
        return undefined;
    }
    todoToAssign.userId = userId;
    userToAssign.addTodo(todoToAssign);
    console.log(`Todo (ID: ${todoId}) assegnato all'utente ${userToAssign.name} (ID: ${userId}).`);
    console.log('Todos attuali:', todos);
    console.log(`Todos dell'utente ${userToAssign.name}:`, userToAssign.todos);
    return todoToAssign;
}
function getUserTodos(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        console.log(`Todo per l'utente ${user.name} (ID: ${userId}):`, user.todos);
        return user.todos;
    }
    else {
        console.error(`Errore: Utente con ID ${userId} non trovato.`);
        return [];
    }
}
function error(message) {
    throw new Error(message);
}
function parseInput(input) {
    if (typeof input === 'string') {
        return input;
    }
    if (typeof input === 'number') {
        return input.toString();
    }
    error('Tipo di input non supportato: ' + typeof input);
}
function updateTodo(id, updates) {
    const todoToUpdate = todos.find(todo => todo.id === id);
    if (todoToUpdate) {
        Object.assign(todoToUpdate, updates);
        console.log(`Todo (ID: ${id}) aggiornato.`);
        console.log('Nuovo stato del Todo:', todoToUpdate);
        console.log('Todos attuali:', todos);
        return todoToUpdate;
    }
    else {
        console.error(`Errore: Todo con ID ${id} non trovato per l'aggiornamento.`);
        return undefined;
    }
}
function getTodoSummary(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        const summary = [todo.title, todo.completed];
        console.log(`Riepilogo Todo (ID: ${id}):`, summary);
        return summary;
    }
    else {
        console.error(`Errore: Todo con ID ${id} non trovato per il riepilogo.`);
        return undefined;
    }
}
function createProject(projectName, projectUsers, projectTodos) {
    const newProject = {
        name: projectName,
        users: projectUsers,
        todos: projectTodos,
    };
    console.log(`Progetto "${projectName}" creato:`, newProject);
    return newProject;
}
// --- ESEMPI DI UTILIZZO ---
console.log('\n--- Esempi: Aggiunta Todo ---');
addTodo('Imparare TypeScript', { priority: 'High', tags: ['typescript', 'coding'] });
addTodo('Costruire una Todo App');
addTodo('Fare la spesa', 'Urgente!');
addTodo('Chiamare la nonna', { from: 'work', due: 'tomorrow' });
console.log('\n--- Esempi: Toggle Todo ---');
toggleTodoCompleted(1);
toggleTodoCompleted(100);
toggleTodoCompleted(2);
console.log('\n--- Esempi: Aggiornamento Stato Todo con updateTodoStatus ---');
updateTodoStatus(1, types_1.TodoStatus.InProgress);
updateTodoStatus(2, types_1.TodoStatus.Completed);
updateTodoStatus(3, types_1.TodoStatus.InProgress);
updateTodoStatus(1, types_1.TodoStatus.Pending);
updateTodoStatus(999, types_1.TodoStatus.Completed);
console.log('\n--- Esempi: Assegnazione Todo a Utente ---');
assignTodoToUser(1, 1);
assignTodoToUser(2, 2);
assignTodoToUser(3, 1);
assignTodoToUser(1, 99);
assignTodoToUser(99, 1);
console.log('\n--- Esempi: Ottenere i Todo di un Utente ---');
getUserTodos(1);
getUserTodos(2);
getUserTodos(3);
getUserTodos(99);
console.log('\n--- Esempio: Gestione Errore con Never ---');
try {
    error('Qualcosa è andato storto in modo irrecuperabile!');
}
catch (e) {
    console.error('Catturato un errore:', e.message);
}
console.log('\n--- Esempi: Gestione Tipi Dinamici con Unknown ---');
try {
    console.log('Input "Hello":', parseInput('Hello'));
    console.log('Input 123:', parseInput(123));
    console.log('Input true:', parseInput(true));
}
catch (e) {
    console.error('Errore durante il parsing dell\'input:', e.message);
}
console.log('\n--- Esempi: Aggiornamento Parziale Todo con Partial ---');
updateTodo(1, { title: 'Imparare TypeScript (Aggiornato)' });
updateTodo(2, { completed: true, userId: 2 });
updateTodo(999, { title: 'Non esisto' });
console.log('\n--- Esempi: Ottenere Riepilogo Todo con Tupla ---');
getTodoSummary(1);
getTodoSummary(2);
getTodoSummary(999);
console.log('\n--- Creazione e visualizzazione del Progetto Finale ---');
const myProject = createProject('La Mia App Todo con TS', users, todos);
console.log('Oggetto Progetto creato:', myProject);
console.log('\n--- Stato Finale dei Todos (Global Array) ---');
console.log(todos);
console.log('\n--- Utenti disponibili (Global Array - Ora istanze di Classe) ---');
console.log(users);
