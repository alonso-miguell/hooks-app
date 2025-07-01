import {TasksList} from "./TasksList";
import {TaskAdder} from "./TaskAdder";
import {useTask} from "./useTask";

export const TaskApp = () => {
    const {
        tasks, totalTasks, pendingTasks, handleToggleTask, handleNewTask, handleRemoveTask,
    } = useTask();

    return (<>
        <h1>Task App: {totalTasks} tasks

        </h1>
        <hr/>
        <h2>
            <small> Pending: {pendingTasks} tasks </small>

        </h2>

        <div className="row">
            <div className="col-7">
                <TasksList
                    tasksList={tasks}
                    onTaskRemove={handleRemoveTask}
                    onTaskToggle={handleToggleTask}
                />
            </div>
            <div className="col-5">
                <h4> Add new task </h4>
                <hr/>

                <TaskAdder onNewTask={handleNewTask}/>
            </div>
        </div>


    </>)
}