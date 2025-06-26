import {useForm} from "../hooks/useForm";

export const TaskAdder = ({onNewTask}) => {
    const {description, onInputChange, onResetForm} = useForm({description:''  });

    const onFormSubmit = (event) => {

        console.log('submitting');
        event.preventDefault();

        if(description.length<=1) return;

        const newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        // console.log(newTask);
        onResetForm();
        onNewTask(newTask);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                placeholder="Add something to do"
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <hr/>
            <button type="submit" className="btn btn-primary"> Add new task</button>
        </form>
    );
}