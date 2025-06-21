import {useCounter} from "../hooks/useCounter";
import {useMemo, useState} from "react";

const heavyStuff = (iterations = 1000) => {
    for (let i = 0; i < iterations; i++) {
        console.log('iterating');
    }

    return `executed iterations: ${iterations}`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(3000);
    const [show, setShow] = useState(true);

    //useMemo syntax is kind of similar to useEffect
    const memorizedStuff = useMemo(() => heavyStuff(counter), [counter]);


    return (<>
        <h1>Counter:<small> {counter} </small></h1>
        <hr/>

        <h4> {memorizedStuff}</h4>

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
            Show/Hide: {JSON.stringify(show)}
        </button>
    </>);

};