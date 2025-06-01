import React from 'react';

export const CounterApp = () => {

    const [counter, setCounter] = React.useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    return (
        <>
            <title>Counter App</title>
            <h1>Counter App</h1>
            <h3>Counter1: {counter.counter1} </h3>
            <h3>Counter2: {counter.counter2} </h3>
            <h3>Counter3: {counter.counter3} </h3>

            <button onClick={() => setCounter({
                ...counter,
                counter1: counter.counter1 + 1
            })}> Increase Counter1 </button>
        </>
    )
}