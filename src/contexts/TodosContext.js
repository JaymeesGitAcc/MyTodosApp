import { createContext } from "react";

export const TodosContext = createContext(null);

export function todosReducer(state, action) {
    switch (action.type) {
        case "added": {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: crypto.randomUUID(),
                        task: action.payload.task,
                        completed: false,
                    },
                ],
            };
        }
        case "deleted": {
            const filteredTodos = state.todos.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                todos: filteredTodos,
            };
        }
        case "edited": {
            const updatedTodos = state.todos.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          task: action.payload.task,
                      }
                    : item
            );
            return {
                ...state,
                todos: updatedTodos,
            };
        }
        case "completed": {
            const updateTodos = state.todos.map((item) =>
                item.id === action.payload.id
                    ? { ...item, completed: !item.completed }
                    : item
            );

            return {
                ...state,
                todos: updateTodos,
            };
        }
        case "saved": {
            const updatedTodos = state.todos.map((item) =>
                item.id === action.payload.id
                    ? { ...item, task: action.payload.task }
                    : item
            );
            return {
                ...state,
                todos: updatedTodos,
            };
        }
        case "cleared-all": {
            return {
                ...state,
                todos: [],
            };
        }
        case "cleared-completed": {
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };
        }
        case "cleared-uncompleted": {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.completed),
            };
        }
        default: {
            throw new Error("Invalid action type", action.type);
        }
    }
}
