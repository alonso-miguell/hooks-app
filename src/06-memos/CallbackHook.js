import {useCallback, useState} from "react";
import {ShowIncrement} from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    /*value in setCounter((value) => ...) Comes from the latest state held by React
    It's using the functional update form of the useState setter:

    setCounter((prevValue) => prevValue + 1);

    This pattern is useful when you're updating state based on the previous value,
    especially when the current state might be stale due to memoization or batching.
     */
    const incrementInFather = (value) => {
        setCounter((counterState) => counterState + value)
        console.log('calling increment');
    };

    /* we use useCallback hook to memorize functions
    different to useMemo, which memorizes values instead
     */
    const memorizedFunction = useCallback(() => incrementInFather(5), []);



    return (<>
            <h1>
                useCallback Hook:{counter}
            </h1>
            <hr/>

            <ShowIncrement increment={memorizedFunction}/>

        </>)
}

/*
Summary Table

| Hook          | What it memoizes | When to use                          |
| ------------- | ---------------- | ------------------------------------ |
| `useMemo`     | A **value**      | Expensive calculations               |
| `useCallback` | A **function**   | Stable function reference for props  |
| `React.memo`  | A **component**  | Prevent re-render if props unchanged |

 */