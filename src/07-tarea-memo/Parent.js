import React, {useCallback} from 'react'
import { Child } from './Child'
import { useState } from 'react';

export const Parent = () => {

    const numbers = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( (savedState) => savedState + num )
    }

    const memorizedIncrement= useCallback( incrementar, [] );

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numbers.map( n => (
                    <Child
                        key={ n }
                        numero={ n }
                        incrementar={ memorizedIncrement }
                    />
                ))
            }
            {/* <Child /> */}
        </div>
    )
}
