import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const ClearButton = ({ children, actiontype = "" }) => {
    const { dispatch } = useContext(TodosContext);

    const handleOnClick = () => {
        if (actiontype !== "") {
            dispatch({
                type: actiontype,
            });
        }
    };
    return (
        <div className="flex justify-center py-2">
            <button
                className="text-sm text-slate-200 p-1 rounded-lg border-2 md:p-2 md:text-base duration-150 hover:bg-indigo-500"
                onClick={handleOnClick}
            >
                {children}
            </button>
        </div>
    );
};

export default ClearButton;
