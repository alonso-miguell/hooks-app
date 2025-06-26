import {TaskItem} from "./TaskItem";

export const TasksList = ({tasksList = []}) => {
    return (
        <ul className="list-group">

            {tasksList.map((task) => {
                return (
                    <TaskItem key={task.id} description={task.description}></TaskItem>
                );
            })}

        </ul>
    );
}