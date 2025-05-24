interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata?: any; 
}

interface User {
    id: number;
    name: string;
    email?: string;
    readonly todos: readonly Todo[]; 
}

interface TodoWithMetadata extends Todo {
    metadata: any; 
}

interface Project {
    name: string;
    users: User[];
    todos: Todo[];
}