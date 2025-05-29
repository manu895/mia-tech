

export enum TodoStatus {
    Pending,
    InProgress,
    Completed
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata?: any;
    status: TodoStatus;
}

export type PartialTodo = Partial<Todo>;

export type TodoRecord = Record<number, Todo>; 

export interface TodoWithMetadata extends Todo {
    metadata: any;
}

export interface Project {
    name: string;
    users: import('./User').User[];
    todos: Todo[];
}