import {useEffect, useReducer, useState} from "react";

export const useTask = (initialState=[]) => {
    // const initialState = [];

    // const initialState = [
    //     {
    //         id: new Date().getTime(), description: "sample Task 1", done: false,
    //     },
    //     {
    //         id: new Date().getTime() * 2, description: "sample Task 2", done: false,
    //     },
    // ];

    // this is another way to initialize by checking localStorage without passing init to the reducer
    // const initialState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    const init = () => {
        return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    };

    const taskReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case "ADD_TASK":
                return [...state, action.payload];
            case "REMOVE_TASK":
                return state.filter((task) => task.id !== action.payload);
            case "TOGGLE_TASK":
                return state.map((task) => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            done: !task.done
                        };
                    }

                    return task;
                });
            default:
                return initialState;
        }
    }
    //we can pass init to the reducer so we can initializa initialState by a custom function
    const [tasks, dispatch] = useReducer(taskReducer, initialState, init);

    const [pendingTasks, setPendingTasks] = useState(0);
    const [totalTasks, setTotalTasks] = useState(tasks.length);

    const handleNewTask = (task) => {
        const action = {
            payload: task, type: "ADD_TASK",
        };

        console.log(`printing action payload: ${JSON.stringify(action.payload)}`);

        //dispatch/dispara action
        //dispact is initlized at the same time than tasks (reducer)
        dispatch(action);
    }

    const handleRemoveTask = (id) => {
        const action = {
            payload: id,
            type: "REMOVE_TASK",
        }

        console.log(`gonna remove task id:${action.payload}`);
        dispatch(action);
    }

    const handleToggleTask = (id) => {
        const action = {
            payload: id,
            type: "TOGGLE_TASK",
        }

        console.log(`gonna toggle task id:${action.payload}`);
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setPendingTasks(tasks.filter((task) => !task.done).length );
        setTotalTasks(tasks.length);
    }, [tasks])



    return {
        ...tasks,
        tasks,
        totalTasks,
        pendingTasks,
        handleNewTask,
        handleRemoveTask,
        handleToggleTask,

    }

}