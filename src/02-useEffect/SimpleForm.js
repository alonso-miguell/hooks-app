import {useEffect, useState} from "react";
import {Message} from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "novus",
        email: "novus@gmail.com",
    })

    const {username, email} = formState

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value})
    }

    useEffect(() => {
        console.log('Hello World!');
    },[]);

    return (
        <>
            <h1> Formulario Simple </h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="alonsomiguel.wpc@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                username==='novus2' && <Message/>
            }

        </>
    )
}