import {useForm} from "../hooks/useForm";
import {TasksList} from "./TasksList";
import {TaskAdder} from "./TaskAdder";
import {useReducer} from "react";

export const TaskApp = () => {
    const initialState = [{
        id: new Date().getTime(), description: "sample Task 1", done: false,
    }, {
        id: new Date().getTime() * 2, description: "sample Task 2", done: false,
    },];

    const taskReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case "UNDEFINED":
                throw 'undefined task';

            default:
                return initialState;
        }
    }

    // const tasks = taskReducer();

    const[tasks, dispatch] = useReducer(taskReducer, initialState)
    const handleNewTask = (task) => {
        console.log({task});
    }

    return (<>
        <h1>Task App</h1>

        <div className="row">
            <div className="col-7">
                <TasksList tasksList={tasks}/>
            </div>
            <div className="col-5">
                <h4> Add new task </h4>
                <hr/>

                <TaskAdder onNewTask={handleNewTask} />
            </div>
        </div>


    </>)
}