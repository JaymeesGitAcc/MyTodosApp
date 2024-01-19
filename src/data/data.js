export const initialTasks = {
    todos: [
        {
            id: 0,
            task: "Wash Car",
            completed: false,
        },
        {
            id: 1,
            task: "Buy Groceries",
            completed: false,
        },
        {
            id: 2,
            task: "Go to Gym",
            completed: true,
        },
    ],
};

export function getLocalStorage() {
    return localStorage.getItem("todos-context")
        ? JSON.parse(localStorage.getItem("todos-context"))
        : initialTasks;
}
