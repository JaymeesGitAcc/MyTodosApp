import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "../contexts/TodosContext";

export const EditTask = ({ todo, setIsEditing }) => {
    const [input, setInput] = useState(todo.task);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (input) {
            dispatch({
                type: "edited",
                payload: {
                    id: todo.id,
                    task: input,
                },
            });
        }
        setIsEditing(false);
        setInput("");
    };
    return (
        <form onSubmit={handleOnSubmit} className="flex gap-4 w-full">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`border-2 py-1 px-2 rounded-md w-full text-sm md:text-base`}
                placeholder={`editing...`}
                ref={inputRef}
            />
            <button
                className={`p-2 bg-green-500 text-white rounded-lg text-sm md:text-base ml-auto duration-150 hover:bg-green-600`}
            >
                Save
            </button>
        </form>
    );
};
