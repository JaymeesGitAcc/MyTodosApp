import React, { useReducer } from "react";
import { TodosContext, todosReducer } from "./contexts/TodosContext";
import { getLocalStorage } from "./data/data";
import Container from "./components/Container";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import BottomText from "./components/BottomText";

function App() {
    const initialData = getLocalStorage();
    const [todosObject, dispatch] = useReducer(todosReducer, initialData);
    const { todos, hideCompleted } = todosObject;

    localStorage.setItem("todos-context", JSON.stringify(todosObject));

    return (
        <>
            <TodosContext.Provider value={{ todos, hideCompleted, dispatch }}>
                <Container className="my-4 md:my-[100px] mx-auto w-[95%] max-w-[600px] min-h-[300px] shadow rounded-2xl pt-4 px-4 bg-slate-900">
                    <h1 className="text-slate-300 text-2xl font-mono text-center mb-4">
                        My Todos
                    </h1>
                    <AddTask />
                    <ListTasks />
                    {!todos?.length && <BottomText />}
                </Container>
            </TodosContext.Provider>
        </>
    );
}

export default App;
