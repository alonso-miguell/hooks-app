export const TaskItem = ({id, description}) => {
    return (<li key={id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">
                                        {description}
                                    </span>
        <button className="btn btn-danger"> Delete</button>
    </li>);
}