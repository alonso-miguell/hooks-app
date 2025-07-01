import {TaskItem} from "./TaskItem";

export const TasksList = ({tasksList = [], onTaskRemove, onTaskToggle}) => {
    return (
        <ul className="list-group">

            {tasksList.map((task) => {
                return (
                    <TaskItem
                        key={task.id}
                        description={task.description}
                        done={task.done}
                        onTaskRemove={ () => onTaskRemove(task.id)}
                        onTaskToggle={ ()=> onTaskToggle(task.id)}
                    ></TaskItem>
                );
            })}

        </ul>
    );
}