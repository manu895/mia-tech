// I tipi verranno inclusi automaticamente da types.ts

const todos: Todo[] = [];

let nextTodoId: number = 1;

const users: User[] = [
{ id: 1, name: 'Manuel', email: 'alice@example.com', todos: [] }, 
{ id: 2, name: 'Silvia', email: 'bob@example.com', todos: [] }, 
{ id: 3, name: 'Armando', todos: [] } 
];

function addTodo(title: string, metadata?: string | object): Todo {
const newTodo: Todo = {
 id: nextTodoId++,
 title: title,
 completed: false,
 ...(metadata !== undefined && { metadata }),
};
todos.push(newTodo);
console.log(`Todo aggiunto: "${newTodo.title}" (ID: ${newTodo.id})`);
if (newTodo.metadata) {
   console.log('  con metadata:', newTodo.metadata);
}
console.log('Todos attuali:', todos);
return newTodo;
}

function toggleTodoCompleted(id: number): Todo | undefined {
const todoToToggle = todos.find(todo => todo.id === id);

if (todoToToggle) {
 todoToToggle.completed = !todoToToggle.completed;
 console.log(`Stato del todo (ID: ${id}) cambiato in "completed: ${todoToToggle.completed}"`);
 console.log('Todos attuali:', todos);
 return todoToToggle;
} else {
 console.error(`Errore: Todo con ID ${id} non trovato.`);
 return undefined;
}
}

function assignTodoToUser(todoId: number, userId: number): Todo | undefined {
const todoToAssign = todos.find(todo => todo.id === todoId);
const userExists = users.some(user => user.id === userId);

if (!todoToAssign) {
 console.error(`Errore: Todo con ID ${todoId} non trovato per l'assegnazione.`);
 return undefined;
}

if (!userExists) {
 console.error(`Errore: Utente con ID ${userId} non trovato. Impossibile assegnare il todo.`);
 return undefined;
}

todoToAssign.userId = userId; 


console.log(`Todo (ID: ${todoId}) assegnato all'utente (ID: ${userId}).`);
console.log('Todos attuali:', todos);
return todoToAssign;
}

function getUserTodos(userId: number): Todo[] {
const userTodos = todos.filter(todo => todo.userId === userId);
console.log(`Todo per l'utente (ID: ${userId}):`, userTodos);
return userTodos;
}

function error(message: string): never {
throw new Error(message);
}

function parseInput(input: unknown): string {
if (typeof input === 'string') {
 return input;
}
if (typeof input === 'number') {
 return input.toString();
}
error('Tipo di input non supportato: ' + typeof input);
}

function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
const todoToUpdate = todos.find(todo => todo.id === id);

if (todoToUpdate) {
 Object.assign(todoToUpdate, updates);
 console.log(`Todo (ID: ${id}) aggiornato.`);
 console.log('Nuovo stato del Todo:', todoToUpdate);
 console.log('Todos attuali:', todos);
 return todoToUpdate;
} else {
 console.error(`Errore: Todo con ID ${id} non trovato per l'aggiornamento.`);
 return undefined;
}
}

function getTodoSummary(id: number): [string, boolean] | undefined {
 const todo = todos.find(t => t.id === id);
 if (todo) {
     const summary: [string, boolean] = [todo.title, todo.completed];
     console.log(`Riepilogo Todo (ID: ${id}):`, summary);
     return summary;
 } else {
     console.error(`Errore: Todo con ID ${id} non trovato per il riepilogo.`);
     return undefined;
 }
}

function createProject(projectName: string, projectUsers: User[], projectTodos: Todo[]): Project {
const newProject: Project = {
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
} catch (e: any) {
console.error('Catturato un errore:', e.message);
}

console.log('\n--- Esempi: Gestione Tipi Dinamici con Unknown ---');
try {
 console.log('Input "Hello":', parseInput('Hello')); 
 console.log('Input 123:', parseInput(123));        
 console.log('Input true:', parseInput(true));      
} catch (e: any) {
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

console.log('\n--- Utenti disponibili (Global Array) ---');
console.log(users);