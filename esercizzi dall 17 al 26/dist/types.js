"use strict";
// types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Pending"] = 0] = "Pending";
    TodoStatus[TodoStatus["InProgress"] = 1] = "InProgress";
    TodoStatus[TodoStatus["Completed"] = 2] = "Completed";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
