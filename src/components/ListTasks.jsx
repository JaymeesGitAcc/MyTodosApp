import React, { useContext, useState } from "react";
import Task from "./Task";
import { TodosContext } from "../contexts/TodosContext";
import ClearButton from "./ClearButton";

function ListTasks() {
    const { todos } = useContext(TodosContext);
    const [currentCategory, setCurrentCategory] = useState("all");

    let visibleTodos = [...todos];
    let clearActionType = "cleared-all";
    const completedTodos = [];
    const unCompletedTodos = [];

    todos.forEach((todo) => {
        if (todo.completed) completedTodos.push({ ...todo });
        else unCompletedTodos.push({ ...todo });
    });

    switch (currentCategory) {
        case "completed": {
            visibleTodos = completedTodos;
            clearActionType = "cleared-completed";
            break;
        }
        case "uncompleted": {
            visibleTodos = unCompletedTodos;
            clearActionType = "cleared-uncompleted";
            break;
        }
    }

    return (
        <div className="py-2 md:px-8">
            <div className="flex gap-4 flex-wrap justify-center">
                <button
                    className={`p-1 md:p-2 rounded-lg text-white text-sm md:text-base ${
                        currentCategory === "all"
                            ? "bg-indigo-600"
                            : "bg-slate-800"
                    }`}
                    onClick={() => {
                        setCurrentCategory("all");
                    }}
                >
                    All ({todos.length})
                </button>
                <button
                    className={`p-1 md:p-2 rounded-lg text-white text-sm md:text-base ${
                        currentCategory === "completed"
                            ? "bg-indigo-600"
                            : "bg-slate-800"
                    }`}
                    onClick={() => {
                        setCurrentCategory("completed");
                    }}
                >
                    Completed ({completedTodos.length})
                </button>
                <button
                    className={`p-1 md:p-2 rounded-lg text-white text-sm md:text-base ${
                        currentCategory === "uncompleted"
                            ? "bg-indigo-600"
                            : "bg-slate-800"
                    }`}
                    onClick={() => {
                        setCurrentCategory("uncompleted");
                    }}
                >
                    Uncompleted ({unCompletedTodos.length})
                </button>
            </div>

            {visibleTodos.length ? (
                <>
                    {visibleTodos.map((todo) => (
                        <Task key={todo.id} todo={todo} />
                    ))}
                    <ClearButton actiontype={clearActionType}>
                        Clear All
                    </ClearButton>
                </>
            ) : (
                <div className="font-mono text-center p-6 text-slate-400">
                    EMPTY!
                </div>
            )}
        </div>
    );
}

export default ListTasks;
