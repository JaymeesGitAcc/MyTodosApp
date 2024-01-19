import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import Input from "./Input";

function AddTask() {
    const [input, setInput] = useState("");
    const { dispatch } = useContext(TodosContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (input) {
            dispatch({
                type: "added",
                payload: {
                    task: input,
                },
            });
        }
        setInput("");
    };

    return (
        <form
            onSubmit={handleOnSubmit}
            className="flex items-center max-w-[450px] mx-auto"
        >
            <Input
                type="text"
                placeholder="enter task"
                className="grow p-2 rounded-l-[30px] outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                shouldFocus={true}
                required
            />
            <button className="rounded-r-[30px] bg-indigo-500 text-white px-4 py-2">
                Add
            </button>
        </form>
    );
}

export default AddTask;
