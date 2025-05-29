
import { Todo, TodoRecord } from './types';

export function filterTodos<T extends Todo>(todos: T[], predicate: (todo: T) => boolean): T[] {
    return todos.filter(predicate);
}


export function convertArrayToRecord(todosArray: Todo[]): TodoRecord {
    const record: TodoRecord = {};
    for (const todo of todosArray) {
        record[todo.id] = todo;
    }
    return record;
}