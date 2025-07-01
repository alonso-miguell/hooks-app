export const TaskItem = ({id, description, done, onTaskRemove, onTaskToggle}) => {
    return (<li key={id} className="list-group-item d-flex justify-content-between">
                                    <span
                                        className={`align-self-center ${(done) ? 'text-decoration-line-through': ''}`}
                                        onClick={onTaskToggle}
                                    >
                                        {description}
                                    </span>
        <button className="btn btn-danger" onClick={onTaskRemove}> Delete</button>
    </li>);
}