import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import Input from "./Input";
import { EditTask } from "./EditTask";

function Task({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const { dispatch } = useContext(TodosContext);

    const handleDelete = (id) => {
        dispatch({
            type: "deleted",
            payload: {
                id,
            },
        });
    };

    const handleOnComplete = (id) => {
        dispatch({
            type: "completed",
            payload: {
                id,
            },
        });
    };

    return (
        <div className="flex items-center gap-2 my-4">
            {!isEditing ? (
                <>
                    <Input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleOnComplete(todo.id)}
                        disabled={isEditing === true}
                        id={todo.id}
                    />
                    <label
                        htmlFor={todo.id}
                        className={`
                        text-slate-200 font-semibold text-sm md:text-base
                        ${
                            todo.completed
                                ? "line-through italic text-indigo-500"
                                : ""
                        }
                    `}
                    >
                        {todo.task}
                    </label>
                </>
            ) : (
                <EditTask setIsEditing={setIsEditing} todo={todo} />
            )}
            <div className="ml-auto flex gap-2">
                {!todo.completed && !isEditing && (
                    <button
                        className={`p-2 bg-slate-500 text-white rounded-lg text-sm md:text-base`}
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >
                        Edit
                    </button>
                )}

                <button
                    className={`p-2 bg-red-600 text-white rounded-lg text-sm md:text-base`}
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Task;
