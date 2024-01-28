import Container from "./components/Container";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import { TodosProvider } from "./contexts/TodosProvider";

function App() {
    return (
        <>
            <TodosProvider>
                <Container className="my-4 md:my-[100px] mx-auto w-[95%] duration-150 max-w-[600px] min-h-[300px] shadow rounded-2xl pt-4 px-4 bg-slate-900">
                    <h1 className="text-slate-300 text-2xl font-mono text-center mb-4">
                        My Todos
                    </h1>
                    <AddTask />
                    <ListTasks />
                </Container>
            </TodosProvider>
        </>
    );
}

export default App;
