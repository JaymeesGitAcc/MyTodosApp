import React, { useContext } from "react";
import Task from "./Task";
import { TodosContext } from "../contexts/TodosContext";

function ListTasks() {
    const { todos, hideCompleted, dispatch } = useContext(TodosContext);

    const activeTodos = todos.filter((todo) => !todo.completed);
    const visibleTodos = hideCompleted ? activeTodos : todos;
    const unActiveTodosCount = todos.length - activeTodos.length;

    return (
        <div className="py-2 md:px-8">
            {activeTodos.length !== todos.length && (
                <div className="text-center py-2">
                    <label
                        htmlFor="toggle"
                        className="text-slate-400 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            defaultChecked={hideCompleted}
                            onChange={() => {
                                dispatch({
                                    type: "toggle-completed",
                                });
                            }}
                            id="toggle"
                        />{" "}
                        Hide <span>{unActiveTodosCount}</span> completed{" "}
                        {unActiveTodosCount > 1 ? "tasks" : "task"}
                    </label>
                </div>
            )}

            {visibleTodos.map((todo) => (
                <Task key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default ListTasks;
