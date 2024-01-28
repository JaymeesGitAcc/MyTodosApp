import { useReducer } from "react";
import { getLocalStorage } from "../data/data";
import {
    TodosContext,
    TodosDispatchContext,
    todosReducer,
} from "./TodosContext";

export const TodosProvider = ({ children }) => {
    const initialData = getLocalStorage();
    const [todosObject, dispatch] = useReducer(todosReducer, initialData);
    const { todos } = todosObject;
    localStorage.setItem("todos-context", JSON.stringify(todosObject));

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
};
